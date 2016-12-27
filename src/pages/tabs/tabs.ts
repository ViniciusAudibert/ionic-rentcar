import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CarsPage } from '../cars/cars';
import { ServicesPage } from '../services/services';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = CarsPage;
  tab3Root: any = ServicesPage;
  tab4Root: any = ContactPage;

  constructor() {

  }
}
