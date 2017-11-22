import { CadastroServicoPage } from './../pages/cadastroservico/cadastroservico';
import { ServReferencia } from './../pages/servreferencia/servreferencia';
import { PerfilPage } from './../pages/perfil/perfil';
import { PortifolioPage } from './../pages/portifolio/portifolio';
import { ReferenciaPage } from './../pages/referencia/referencia';
import { ServicosPage } from './../pages/servicos/servicos';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FreelancerPage } from './../pages/freelancer/freelancer';
import { LoginPage } from './../pages/login/login';
import { AreaPage } from './../pages/area/area';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';

import { HttpModule} from '@angular/http';//imputado

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FreelancerPage,
    LoginPage,
    CadastroPage,
    ServicosPage,
    AreaPage,
    ReferenciaPage,
    PortifolioPage,
    PerfilPage,
    ServReferencia,
    CadastroServicoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FreelancerPage,
    LoginPage,
    CadastroPage,
    ServicosPage,
    AreaPage,
    ReferenciaPage,
    PortifolioPage,
    PerfilPage,
    ServReferencia,
    CadastroServicoPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
