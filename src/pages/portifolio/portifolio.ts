import { ServReferencia } from './../servreferencia/servreferencia';
import { Servico } from './../servicos/servicos';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-portifolio',
  templateUrl: 'portifolio.html'
})
export class PortifolioPage {
  selectedItem: any;
  public servicos: Array<Servico> = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('pessoa');
    this.getServicos();

  }
  getServicos(){
    var url: string = "http://34.238.67.140/anonimosja/servicofeito/list/pessoa/"+this.selectedItem.id;
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


 
}


