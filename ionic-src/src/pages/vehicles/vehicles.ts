import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesPage {

  carros: any = [{
    model: 'Sandero', make: 'Renault', year: '2013', version: 'gls turbo', engine: '1.6', price: '21.999,00', images: ['sandero1.jpg', 'sandero2.jpg'],
    options: [{ "icon": "checkmark", "option": "Air Bag Duplo", "color": "green" }, { "icon": "checkmark", "option": "Alarme", "color": "green" }, { "icon": "checkmark", "option": "Ar Condicionado", "color": "green" }, { "icon": "checkmark", "option": "Ar Quente", "color": "green" }, { "icon": "checkmark", "option": "Bancos em Couro", "color": "green" }, { "icon": "checkmark", "option": "Computador de Bordo", "color": "green" }, { "icon": "checkmark", "option": "Conta-Giros ou Tacômetro", "color": "green" }, { "icon": "checkmark", "option": "Desembaçador Traseiro", "color": "green" }, { "icon": "checkmark", "option": "Direção Hidráulica", "color": "green" }, { "icon": "checkmark", "option": "Farol Neblina", "color": "green" }, { "icon": "checkmark", "option": "Freio Abs", "color": "green" }, { "icon": "checkmark", "option": "Interface", "color": "green" }, { "icon": "checkmark", "option": "Limpador Traseiro", "color": "green" }, { "icon": "checkmark", "option": "Retrovisores Elétricos", "color": "green" }, { "icon": "checkmark", "option": "Rodas Liga Leve", "color": "green" }, { "icon": "checkmark", "option": "Sensor de Chuva", "color": "green" }, { "icon": "checkmark", "option": "Sensor de Estacionamento", "color": "green" }, { "icon": "checkmark", "option": "Travas Elétricas", "color": "green" }, { "icon": "checkmark", "option": "Vidros Verdes", "color": "green" }, { "icon": "checkmark", "option": "Vidros Elétricos", "color": "green" }, { "icon": "checkmark", "option": "Volante com Regulagem de Altura", "color": "green" }]
  },

  {
    model: 'Ford', make: 'Fusion ', year: '2016', version: 'lst', engine: '2.0', price: '121.999,00', images: ['fusion1.jpg', 'fusion2.jpg'],
    options: [{ "icon": "checkmark", "option": "Air Bag Duplo", "color": "green" }, { "icon": "checkmark", "option": "Alarme", "color": "green" }, { "icon": "checkmark", "option": "Ar Condicionado", "color": "green" }, { "icon": "checkmark", "option": "Ar Quente", "color": "green" }, { "icon": "checkmark", "option": "Bancos em Couro", "color": "green" }, { "icon": "checkmark", "option": "Computador de Bordo", "color": "green" }, { "icon": "checkmark", "option": "Conta-Giros ou Tacômetro", "color": "green" }, { "icon": "checkmark", "option": "Desembaçador Traseiro", "color": "green" }, { "icon": "checkmark", "option": "Direção Hidráulica", "color": "green" }, { "icon": "checkmark", "option": "Farol Neblina", "color": "green" }, { "icon": "checkmark", "option": "Freio Abs", "color": "green" }, { "icon": "checkmark", "option": "Interface", "color": "green" }, { "icon": "checkmark", "option": "Limpador Traseiro", "color": "green" }, { "icon": "checkmark", "option": "Retrovisores Elétricos", "color": "green" }, { "icon": "checkmark", "option": "Rodas Liga Leve", "color": "green" }, { "icon": "checkmark", "option": "Sensor de Chuva", "color": "green" }, { "icon": "checkmark", "option": "Sensor de Estacionamento", "color": "green" }, { "icon": "checkmark", "option": "Travas Elétricas", "color": "green" }, { "icon": "checkmark", "option": "Vidros Verdes", "color": "green" }, { "icon": "checkmark", "option": "Vidros Elétricos", "color": "green" }, { "icon": "checkmark", "option": "Volante com Regulagem de Altura", "color": "green" }]
  }];

  constructor(public navCtrl: NavController) {
  }

}
