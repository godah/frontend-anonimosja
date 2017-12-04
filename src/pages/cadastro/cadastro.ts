import { AreaPage } from './../area/area';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
//import { CommonModule } from '@angular/common';



@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  
})

export class CadastroPage {
  private foto: any;
  private login: any;
  private senha: any;
  private new: boolean = true;
  selectedItem: any;
  private freelancer: Object={};
  constructor(public http: Http, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams){
    //recebe parametros enviados de outra pagina
    this.selectedItem = navParams.get('pessoa');

    //testa se null abre novo, se !null abre editar
    if(this.selectedItem != null){
      this.freelancer = this.selectedItem;
      this.new = false;
    }
  } 

  atualizaArquivo($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.foto = myReader.result;
    }
    myReader.readAsDataURL(file);
  }





  
  //post
  submit() {
    
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    
    if(this.new){
      //POST freelancer
      var url = 'http://localhost:8080/anonimosja/freelancer/post';
      this.http.post(url, this.freelancer, options)
      .subscribe(data => {

        //confirma cadastro a fim de pegar o id para proxima seção de cadastro
        this.confirmaCadastro();
        
      }, error => {
        //falha no retorno http
        var toastMsg = "Login não disponível.";
        //cria mensagem toast
        let toast = this.toastCtrl.create({
          message: toastMsg,
          duration: 3000,
          position: 'top'
        });

        toast.present();

      }); 
    }else{
      //PUT freelancer
      var url = 'http://localhost:8080/anonimosja/freelancer/put';
      this.http.put(url, this.freelancer, options)
      .subscribe(data => {
        
      }); 

      this.navCtrl.push(AreaPage, {
        freelancer: this.freelancer
      });
    }
  }  

  confirmaCadastro(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    console.log(this.login +" "+this.senha);
    var url = 'http://localhost:8080/anonimosja/login/list/'+this.login+":"+this.senha;
    this.http.get(url).map(res => res.json())
      .subscribe(data => {
      this.freelancer = data;    
      
      //apos pegar id
      this.navCtrl.push(AreaPage, {
        freelancer: this.freelancer
      }); 

    });

 
      
  }

}
