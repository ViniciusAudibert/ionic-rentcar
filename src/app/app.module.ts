import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { VehiclesPage } from '../pages/vehicles/vehicles';
import { FavouritePage } from '../pages/favourite/favourite';
import { ServicesPage } from '../pages/services/services';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    VehiclesPage,
    FavouritePage,
    ServicesPage,
    ContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    VehiclesPage,
    FavouritePage,
    ServicesPage,
    ContactPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
