import { Freela } from './../login/login';
import { PortifolioPage } from './../portifolio/portifolio';
//import { Component, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-freelancer',
  templateUrl: 'freelancer.html'
})

export class FreelancerPage {
  portifolioPage = PortifolioPage;  
  public pessoas: Array<Freela> = [];
  public pessoasOrigin: Array<Freela> = [];

  constructor(public navCtrl: NavController, public http: Http) {
    this.getFreelancers();
  } 

  itemTapped(event, pessoa) {
    this.navCtrl.push(PortifolioPage, {
      pessoa: pessoa
    });
  }

  getFreelancers(){
    var url: string = "http://34.238.67.140/anonimosja/freelancer/list";
    this.http.get(url).map(res => res.json())
    .subscribe(data => {
      this.pessoas = data;
      this.pessoasOrigin = data;
      //alert(this.pessoas);
    }); 
  }

  initializeItems() {
    this.pessoas = this.pessoasOrigin;
  }

  public getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.pessoas = this.pessoas.filter((pessoa) => {
        if(pessoa.nome != null){
          return (pessoa.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
      })
    }
  } 

}

