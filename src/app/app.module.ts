import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { YearPage } from '../pages/year/year';
import { ChoosePage } from '../pages/choose/choose';
import { CapitalPage } from '../pages/capital/capital';
import { ColorPage } from '../pages/color/color';
import { PartiesPage } from '../pages/parties/parties';
import { LeaderPage } from '../pages/leader/leader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChoosePage,
    YearPage,
    CapitalPage,
    ColorPage,
    PartiesPage,
    LeaderPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChoosePage,
    YearPage,
    CapitalPage,
    ColorPage,
    PartiesPage,
    LeaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
