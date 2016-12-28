import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    carros : any = [{model:'Sandero', make: 'Renault', year: '2013',version: 'gls turbo', engine: '1.6', price: '21.999,00', images: ['http://www.topgear.com/sites/default/files/styles/16x9_1280w/public/cars-car/image/2015/01/buyers_guide_-_dacia_sandero_2014_-_front_quarter.jpg?itok=8sPp50A5','http://www.renault.co.za/CountriesData/South_Africa/images/cars/Sandero2014/Gallery/Sandero-GALLERY-large-14_ig_w965_h543.jpg'],
  options: [{"icon":"checkmark","option":"Air Bag Duplo","color":"green"},{"icon":"checkmark","option":"Alarme","color":"green"},{"icon":"checkmark","option":"Ar Condicionado","color":"green"},{"icon":"checkmark","option":"Ar Quente","color":"green"},{"icon":"checkmark","option":"Bancos em Couro","color":"green"},{"icon":"checkmark","option":"Computador de Bordo","color":"green"},{"icon":"checkmark","option":"Conta-Giros ou Tacômetro","color":"green"},{"icon":"checkmark","option":"Desembaçador Traseiro","color":"green"},{"icon":"checkmark","option":"Direção Hidráulica","color":"green"},{"icon":"checkmark","option":"Farol Neblina","color":"green"},{"icon":"checkmark","option":"Freio Abs","color":"green"},{"icon":"checkmark","option":"Interface","color":"green"},{"icon":"checkmark","option":"Limpador Traseiro","color":"green"},{"icon":"checkmark","option":"Retrovisores Elétricos","color":"green"},{"icon":"checkmark","option":"Rodas Liga Leve","color":"green"},{"icon":"checkmark","option":"Sensor de Chuva","color":"green"},{"icon":"checkmark","option":"Sensor de Estacionamento","color":"green"},{"icon":"checkmark","option":"Travas Elétricas","color":"green"},{"icon":"checkmark","option":"Vidros Verdes","color":"green"},{"icon":"checkmark","option":"Vidros Elétricos","color":"green"},{"icon":"checkmark","option":"Volante com Regulagem de Altura","color":"green"}]},
  
  {model:'Ford', make: 'Fusion ', year: '2016',version: 'lst', engine: '2.0', price: '121.999,00', images: ['http://o.aolcdn.com/commerce/autodata/images/USC70FOC201B021001.jpg','http://pictures.topspeed.com/IMG/crop/201309/ford-fusion-10_1600x0w.jpg'],
  options: [{"icon":"checkmark","option":"Air Bag Duplo","color":"green"},{"icon":"checkmark","option":"Alarme","color":"green"},{"icon":"checkmark","option":"Ar Condicionado","color":"green"},{"icon":"checkmark","option":"Ar Quente","color":"green"},{"icon":"checkmark","option":"Bancos em Couro","color":"green"},{"icon":"checkmark","option":"Computador de Bordo","color":"green"},{"icon":"checkmark","option":"Conta-Giros ou Tacômetro","color":"green"},{"icon":"checkmark","option":"Desembaçador Traseiro","color":"green"},{"icon":"checkmark","option":"Direção Hidráulica","color":"green"},{"icon":"checkmark","option":"Farol Neblina","color":"green"},{"icon":"checkmark","option":"Freio Abs","color":"green"},{"icon":"checkmark","option":"Interface","color":"green"},{"icon":"checkmark","option":"Limpador Traseiro","color":"green"},{"icon":"checkmark","option":"Retrovisores Elétricos","color":"green"},{"icon":"checkmark","option":"Rodas Liga Leve","color":"green"},{"icon":"checkmark","option":"Sensor de Chuva","color":"green"},{"icon":"checkmark","option":"Sensor de Estacionamento","color":"green"},{"icon":"checkmark","option":"Travas Elétricas","color":"green"},{"icon":"checkmark","option":"Vidros Verdes","color":"green"},{"icon":"checkmark","option":"Vidros Elétricos","color":"green"},{"icon":"checkmark","option":"Volante com Regulagem de Altura","color":"green"}]}];

  constructor(public navCtrl: NavController) {
  }

}
