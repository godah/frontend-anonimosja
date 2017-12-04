import { ReferenciaPage } from './../referencia/referencia';
//import { Servico, ServicosPage } from './../servicos/servicos';
import { Servico } from './../servicos/servicos';
import { Freela } from './../login/login';
//import { AreaPage } from './../area/area';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Component, Injectable, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
//import { NavController, NavParams ,Slides} from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
//import { CommonModule } from '@angular/common';



@Component({
  selector: 'page-cadastroservico',
  templateUrl: 'cadastroservico.html',
  
})
export class CadastroServicoPage {
  private freelancer: Freela; 
  private servico: Object = {}; 
  private descricao: string;
  private contratante: string;
  private data: string;
  public servicos: Array<Servico> = [];
  constructor(public http: Http, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams){
    //recebe parametros enviados de outra pagina
    this.freelancer = navParams.get('freelancer');
    
  }

  submit(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    this.servico = "{descricao:\""+this.descricao+"\",data:\""+this.data+"\",contratante:\""+this.contratante+"\",freelancer:{id:\""+this.freelancer.id+"\"}}";
    //POST freelancer
    var url = 'http://34.238.67.140/anonimosja/servicofeito/post';
    this.http.post(url, this.servico, options)
    .subscribe(data => {
      this.confirmaCadastro();   
    }, error => {
      //falha no retorno http      
    });     

    
  }  

  confirmaCadastro(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    //let options = new RequestOptions({ headers: headers });
    
    var url = 'http://34.238.67.140/anonimosja/servicofeito/list/pessoa/last/'+this.freelancer.id;
    this.http.get(url).map(res => res.json())
      .subscribe(data => {
      this.servico = data;  
      //apos pegar id
      this.navCtrl.push(ReferenciaPage, {
        servico: this.servico,
        freelancer: this.freelancer
      }); 

    });
  }
}
