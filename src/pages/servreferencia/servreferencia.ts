import { Servico } from './../servicos/servicos';
//import { Referencia } from './../referencia/referencia';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-servreferencia',
  templateUrl: 'servreferencia.html'
})
export class ServReferencia {
  private referencia: Object={};
  private servico: Servico;
  constructor(public http: Http, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams){
    //recebe parametros enviados de outra pagina
    this.servico = navParams.get('servico');
    this.getReferencia();
  } 

  getReferencia(){
    var url: string = "http://localhost:8080/anonimosja/referencia/list/servicoFeito/"+this.servico.id;
    this.http.get(url).map(res => res.json())
    .subscribe(data => {
      this.referencia = data;
    });       
  }
   
}
