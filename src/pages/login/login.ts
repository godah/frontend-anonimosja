import { CadastroPage } from './../cadastro/cadastro';
import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  cadastroPage = CadastroPage;
    
  private freelancer: Freela;
  private login: string;
  private senha: string;

  constructor(public http: Http, public navCtrl: NavController, public toastCtrl: ToastController){
    
  } 
  
  submit() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    var url = 'http://34.238.67.140/anonimosja/login/list/'+this.login+":"+this.senha;
    this.http.get(url).map(res => res.json())
      .subscribe(data => {
      this.freelancer = data;
      
      //abre outra pagina passando parametro
      if(this.freelancer.id != null){
        this.navCtrl.push(CadastroPage, {
          pessoa: this.freelancer
        });    
      }else{
        let toast = this.toastCtrl.create({
          message: 'Usuário ou Senha inválido.',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
      

    });
    
  }
  
}

export class Freela {
  private _id: string;
  private _area: string;
  private _login: string;
  private _senha: string;
  private _telefone: string;
  private _email: string;
  private _valorhora: string;
  private _nome: string;
  private _foto: string;
  private _nascimento: string;

  public get id(): string {
      return this._id;
  }

  public set id(id: string) {
      this._id = id;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
      this._nome = nome;
  }

  public get area(): string {
    return this._area;
  }

  public set area(area: string) {
      this._area = area;
  }

  public get telefone(): string {
    return this._telefone;
  }

  public set telefone(telefone: string) {
      this._telefone = telefone;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
      this._email = email;
  }

  public get idade(): string {
    return "teste";//this._nascimento;
  }

  public set idade(idade: string) {
      this._nascimento = idade;
  }

  public get nascimento(): string {
    return "nascimento";//+this._nascimento;
  }

  public set nascimento(nascimento: string) {
      this._nascimento = nascimento;
  }

  public get login(): string {
    return this._login;
  }

  public set login(login: string) {
      this._login = login;
  }

  public get senha(): string {
    return this._senha;
  }

  public set senha(senha: string) {
      this._senha = senha;
  }

  public get valorhora(): string {
    return this._valorhora;
  }

  public set valorhora(valorhora: string) {
      this._valorhora = valorhora;
  }

  public get foto(): string {
    return this._foto;
  }

  public set foto(foto: string) {
      this._foto = foto;
  }
}


