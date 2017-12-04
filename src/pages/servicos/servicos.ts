import { Referencia } from './../referencia/referencia';
import { CadastroServicoPage } from './../cadastroservico/cadastroservico';
import { Freela } from './../login/login';
import { ServReferencia } from './../servreferencia/servreferencia';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'servicos.html'
})
export class ServicosPage {
  private freelancer: any;
  //private data: string;
  private referencia: Referencia;
  public servicos: Array<Servico> = [];
  constructor(public http: Http, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams){
    //recebe parametros enviados de outra pagina
    this.freelancer = navParams.get('freelancer');
    this.getServicos();
  } 

  getServicos(){
    var url: string = "http://localhost:8080/anonimosja/servicofeito/list/pessoa/"+this.freelancer.id;
    this.http.get(url).map(res => res.json())
    .subscribe(data => {
      this.servicos = data;
    });  
    if(this.servicos == null){
      this.servicos = [];
    }
  }
  
  itemTapped(event, servico) {
    this.navCtrl.push(ServReferencia, {
      servico: servico
    });
  }
  /*
    Observação, um evento Http dentro do outro para aguardar
    a execução do mesmo e nao gerar erro de sincronismo
  */
  itemRemove(event, servico) {
    //busca a referencia
    var url: string = "http://localhost:8080/anonimosja/referencia/list/servicoFeito/"+servico.id;
    this.http.get(url).map(res => res.json())
    .subscribe(data => {
      this.referencia = data;

      //encontrando deleta a referencia
      var url: string = "http://localhost:8080/anonimosja/referencia/delete/"+this.referencia.id;    
      this.http.delete(url).subscribe(data =>{
        //deletenado referencia deleta o servicoFeito
        var url: string = "http://localhost:8080/anonimosja/servicofeito/delete/"+servico.id;    
        this.http.delete(url).subscribe(data =>{
          //deletando servicoFeito atualiza lista
            this.getServicos();
          });   
        });  
    });         
  }

  addServicoFeito(){
    this.navCtrl.push(CadastroServicoPage, {
      freelancer: this.freelancer
    }); 
  }
 
}

export class Servico {
  private _id: string;
  private _contratante: string;
  private _data: string;
  private _descricao: string;
  private _freelancer: Freela;
  
  public get id(): string {
      return this._id;
  }

  public set id(id: string) {
      this._id = id;
  }

  public get contratante(): string {
    return this._contratante;
  }

  public set contratante(contratante: string) {
      this._contratante = contratante;
  }
  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(descricao: string) {
      this._descricao = descricao;
  }

  public get data(): string {
    return this._data;
  }

  public set data(data: string) {
      this._data = data;
  }

  public get freelancer(): Freela {
    return this._freelancer;
  }

  public set frelancer(freelancer: Freela) {
      this._freelancer = freelancer;
  }  
}