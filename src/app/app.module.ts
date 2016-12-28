import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CarsPage } from '../pages/cars/cars';
import { ServicesPage } from '../pages/services/services';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    CarsPage,
    ContactPage,
    HomePage,
    ServicesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarsPage,
    ContactPage,
    HomePage,
    ServicesPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
