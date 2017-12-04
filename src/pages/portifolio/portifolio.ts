import { Freela } from './../login/login';
import { FreelancerArea } from './../freelancer/freelancer';
import { Area } from './../area/area';
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
  selectedItem: Freela;
  public servicos: Array<Servico> = [];
  public area: Area;
  public freelancerArea: FreelancerArea;
  idade: any;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.freelancerArea = navParams.get('af');
    this.selectedItem = this.freelancerArea.freelancer;
    this.area = this.freelancerArea.area;
    this.getServicos();
    this.getIdade();
  }

  getIdade(){

    var now = Date.now();
    var nasc = new Date(this.selectedItem.nascimento).valueOf();
    var idade = (Math.round((now - nasc)/31536000000));
    this.idade =(idade);
    
  }

  getServicos(){
    var url: string = "http://localhost:8080/anonimosja/servicofeito/list/pessoa/"+this.selectedItem.id;
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


