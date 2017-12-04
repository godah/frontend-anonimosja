import { Freela } from './../login/login';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Servico, ServicosPage } from './../servicos/servicos';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-referencia',
  templateUrl: 'referencia.html'
})
export class ReferenciaPage {
  private servico: Servico;
  private freelancer: Freela;
  private referencia: Object={};
  private nome: string;
  private tel: string;
  private email: string;
  constructor(public http: Http, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams){
    //recebe parametros enviados de outra pagina
    this.servico = navParams.get('servico');
    this.freelancer = navParams.get('freelancer');
  } 

  submit(){
    this.referencia = "{nome:\""+this.nome+"\",tel:\""+this.tel+"\",email:\""+this.email+"\",servicoFeito:{id:\""+this.servico.id+"\"}}";
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    
    //POST freelancer
    var url = 'http://34.238.67.140/anonimosja/referencia/post';
    this.http.post(url, this.referencia, options)
    .subscribe(data => {
      //alert(data.status);  
      this.backServicosFeitos();
    }, error => {
      //falha no retorno http      
    });     
    
  }

  backServicosFeitos(){
    this.navCtrl.push(ServicosPage, {
      freelancer: this.freelancer
    }); 
  }
 
}



export class Referencia{
  private _id: string;
  private _tel: string;
  private _nome: string;
  private _email: string;
  private _servicofeito: Servico;

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
      this._id = id;
  }

  public get tel(): string {
    return this._tel;
  }

  public set tel(tel: string) {
      this._tel = tel;
  }

  
  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
      this._nome = nome;
  }

  
  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
      this._email = email;
  }

  
  public get servicofeito(): Servico {
    return this._servicofeito;
  }

  public set servicofeito(servicofeito: Servico) {
      this._servicofeito = servicofeito;
  }
}
