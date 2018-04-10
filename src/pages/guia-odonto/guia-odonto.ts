import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GuiaOdontoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guia-odonto',
  templateUrl: 'guia-odonto.html',
})
export class GuiaOdontoPage {

  listaOm:Array<{ om: string; }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listaOm = [
      {om:'Ambulatório Naval da Penha'},
      {om:'Hospital Central da Marinha'},
      {om:'Hospital Naval Marcílio Dias'},
      {om:'Odontoclínica Central da Marinha'},
      {om:'Policlínica Naval de Campo Grande'},
      {om:'Policlinica Naval de Niterói'},
      {om:'Policlínica Naval Nossa Senhora da Glória'},
      {om:'Sanatório Naval de Nova Friburgo'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuiaOdontoPage');
  }

}
