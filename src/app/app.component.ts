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

  activePage: string = this.rootPage.name;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'home' },
      { title: 'Novidades', component: NewsPage, icon: 'information-circle' },
      { title: 'Catálogo', component: VehiclesPage, icon: 'clipboard' },
      { title: 'Favoritos', component: FavouritePage, icon: 'star' },
      { title: 'Serviços', component: ServicesPage, icon: 'cog' },
      { title: 'Contato', component: ContactPage, icon: 'contacts' }
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
    this.activePage = page.component.name;
  }
}
