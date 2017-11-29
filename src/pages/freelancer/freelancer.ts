import { Freela } from './../login/login';
import { PortifolioPage } from './../portifolio/portifolio';
//import { Component, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Area } from '../area/area';


@Component({
  selector: 'page-freelancer',
  templateUrl: 'freelancer.html'
})

export class FreelancerPage {
  portifolioPage = PortifolioPage;  
  public pessoas: Array<Freela> = [];
  public pessoasOrigin: Array<Freela> = [];
  public areaFreelancers: Array<FreelancerArea> = [];

  constructor(public navCtrl: NavController, public http: Http) {
    this.getFreelancers();
    this.getFreelancerArea();
  } 

  itemTapped(event, af) {
    this.navCtrl.push(PortifolioPage, {
      af: af
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

  getFreelancerArea(){
    var url: string = "http://34.238.67.140/anonimosja/freelancerarea/list";
    this.http.get(url).map(res => res.json())
    .subscribe(data => {
      this.areaFreelancers = data;
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

export class FreelancerArea{
  private _id: string;
  private _freelancer: Freela;
  private _area: Area;

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
      this._id = id;
  }

  public get freelancer(): Freela {
    return this._freelancer;
  }

  public set freelancer(freelancer: Freela) {
      this._freelancer = freelancer;
  }

  public get area(): Area {
    return this._area;
  }

  public set area(area: Area) {
      this._area = area;
  }

}