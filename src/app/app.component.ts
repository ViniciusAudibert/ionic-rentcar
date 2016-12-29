import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { VehiclesPage } from '../pages/vehicles/vehicles';
import { FavouritePage } from '../pages/favourite/favourite';
import { ServicesPage } from '../pages/services/services';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Novidades', component: NewsPage },
      { title: 'Catálogo', component: VehiclesPage },
      { title: 'Favoritos', component: FavouritePage },
      { title: 'Serviços', component: ServicesPage },
      { title: 'Contato', component: ContactPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
