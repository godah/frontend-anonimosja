import { CadastroServicoPage } from './../pages/cadastroservico/cadastroservico';
import { ServReferencia } from './../pages/servreferencia/servreferencia';
import { PerfilPage } from './../pages/perfil/perfil';
import { PortifolioPage } from './../pages/portifolio/portifolio';
import { ReferenciaPage } from './../pages/referencia/referencia';
import { ServicosPage } from './../pages/servicos/servicos';

import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';
import { FreelancerPage } from './../pages/freelancer/freelancer';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AreaPage } from '../pages/area/area';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Freelancer', component: FreelancerPage},
      { title: 'Login', component: LoginPage},     
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
