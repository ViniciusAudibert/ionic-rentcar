import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { VehiclesPage } from '../vehicles/vehicles';
import { ServicesPage } from '../services/services';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = VehiclesPage;
  tab3Root: any = ServicesPage;
  tab4Root: any = ContactPage;

  constructor() {

  }
}
