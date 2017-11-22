//import { FreelancerPage } from './../freelancer/freelancer';
import { ServicosPage } from './../servicos/servicos';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Component, Injectable, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
//import { NavController, NavParams ,Slides} from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
//import { CommonModule } from '@angular/common';
@Component({
  selector: 'page-area',
  templateUrl: 'area.html'
})
export class AreaPage {
  private freelancer: any;
  private areas: Array<string> = [];
  //private selectArea: any;
  private area: Object = {};
  constructor(public http: Http, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams){
    //recebe parametros enviados de outra pagina
    this.freelancer = navParams.get('freelancer');
    this.getArea();
  } 

  
  //POST idArea
  postArea(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
   
    var url = 'http://34.238.67.140/anonimosja/freelancerarea/post';
    this.http.post(url, this.area, options)
    .subscribe(data => {
     
    }, error => {
      console.log(error);// Error getting the data
    });

    //apos post avança pagina
    this.navCtrl.push(ServicosPage, {
      freelancer: this.freelancer
    });

  }

  getArea(){
    var urlArea = 'http://34.238.67.140/anonimosja/area/list';
    this.http.get(urlArea).map(res => res.json())
    .subscribe(data => {
      this.areas = data;
    }); 
  }

  itemTapped(event, area) {
    //montando json
    this.area = "{freelancer:{id:\""+this.freelancer.id+"\"}, area:{ id :\""+area.id+"\"}}";
    //salva a Area
    this.postArea();
    

  }
}
