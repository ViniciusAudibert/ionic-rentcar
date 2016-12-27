import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    carros : any = [{model:'Sandero', make: 'Renault', year: '2013',version: 'gls turbo', engine: '1.6', images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Dacia_Sandero_TCe_90_eco%C2%B2_Laur%C3%A9ate_(II)_%E2%80%93_Frontansicht,_21._April_2013,_M%C3%BCnster.jpg/280px-Dacia_Sandero_TCe_90_eco%C2%B2_Laur%C3%A9ate_(II)_%E2%80%93_Frontansicht,_21._April_2013,_M%C3%BCnster.jpg','http://www.renault.co.za/CountriesData/South_Africa/images/cars/Sandero2014/Gallery/Sandero-GALLERY-large-14_ig_w965_h543.jpg'],
  options: [{"icon":"checkmark","option":"Air Bag Duplo","color":"green"},{"icon":"checkmark","option":"Alarme","color":"green"},{"icon":"checkmark","option":"Ar Condicionado","color":"green"},{"icon":"checkmark","option":"Ar Quente","color":"green"},{"icon":"checkmark","option":"Bancos em Couro","color":"green"},{"icon":"checkmark","option":"Computador de Bordo","color":"green"},{"icon":"checkmark","option":"Conta-Giros ou Tacômetro","color":"green"},{"icon":"checkmark","option":"Desembaçador Traseiro","color":"green"},{"icon":"checkmark","option":"Direção Hidráulica","color":"green"},{"icon":"checkmark","option":"Farol Neblina","color":"green"},{"icon":"checkmark","option":"Freio Abs","color":"green"},{"icon":"checkmark","option":"Interface","color":"green"},{"icon":"checkmark","option":"Limpador Traseiro","color":"green"},{"icon":"checkmark","option":"Retrovisores Elétricos","color":"green"},{"icon":"checkmark","option":"Rodas Liga Leve","color":"green"},{"icon":"checkmark","option":"Sensor de Chuva","color":"green"},{"icon":"checkmark","option":"Sensor de Estacionamento","color":"green"},{"icon":"checkmark","option":"Travas Elétricas","color":"green"},{"icon":"checkmark","option":"Vidros Verdes","color":"green"},{"icon":"checkmark","option":"Vidros Elétricos","color":"green"},{"icon":"checkmark","option":"Volante com Regulagem de Altura","color":"green"}]}];

  constructor(public navCtrl: NavController) {
  }

}
