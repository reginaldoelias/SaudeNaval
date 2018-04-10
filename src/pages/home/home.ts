import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GuiaMedicoPage } from '../guia-medico/guia-medico';
import { GuiaOdontoPage } from '../guia-odonto/guia-odonto';
import { SedimePage } from '../sedime/sedime';
import { UnidadesPage } from '../unidades/unidades';
import { EventosPage } from '../eventos/eventos';
import { FaleConoscoPage } from '../fale-conosco/fale-conosco';
import { BebesPage } from '../bebes/bebes';
import { FiqueSaudavelPage } from '../fique-saudavel/fique-saudavel';
import { ResultadosPage } from '../resultados/resultados';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images:Array<{src:string,descricao:string,page:any}>;
  constructor(public navCtrl: NavController) {
this.images = [
{src:"assets/imgs/guia_medico.png",descricao:"Guia Médico",page:GuiaMedicoPage},
{src:"assets/imgs/guia_odonto.png",descricao:"Guia Odontológico",page:GuiaOdontoPage},
{src:"assets/imgs/resultados.png",descricao:"Resultados",page:ResultadosPage},
{src:"assets/imgs/sedime.png",descricao:"Sedime",page:SedimePage},
{src:"assets/imgs/unidades.png",descricao:"Unidade",page:UnidadesPage},
{src:"assets/imgs/eventos.png",descricao:"Eventos",page:EventosPage},
{src:"assets/imgs/bebes.png",descricao:"Bebês",page:BebesPage},
{src:"assets/imgs/fique_saudavel.png",descricao:"Fique Saudável",page:FiqueSaudavelPage},
{src:"assets/imgs/fale_conosco.png",descricao:"Fale Conosco",page:FaleConoscoPage},
]
  }
openPage(image){
  this.navCtrl.setRoot(image.page);
}
}
