import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GuiaMedicoPage } from '../pages/guia-medico/guia-medico';
import { GuiaOdontoPage } from '../pages/guia-odonto/guia-odonto';
import { SedimePage } from '../pages/sedime/sedime';
import { UnidadesPage } from '../pages/unidades/unidades';
import { EventosPage } from '../pages/eventos/eventos';
import { FaleConoscoPage } from '../pages/fale-conosco/fale-conosco';
import { BebesPage } from '../pages/bebes/bebes';
import { FiqueSaudavelPage } from '../pages/fique-saudavel/fique-saudavel';
import { ResultadosPage } from '../pages/resultados/resultados';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GuiaMedicoPage,
    GuiaOdontoPage,
    SedimePage,
    UnidadesPage,
    EventosPage,
    FaleConoscoPage,
    BebesPage,
    FiqueSaudavelPage,
    ResultadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GuiaMedicoPage,
    GuiaOdontoPage,
    SedimePage,
    UnidadesPage,
    EventosPage,
    FaleConoscoPage,
    BebesPage,
    FiqueSaudavelPage,
    ResultadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
