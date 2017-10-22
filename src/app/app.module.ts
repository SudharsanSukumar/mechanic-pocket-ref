import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

//Components
import { HydraulicCylinderComponent } from '../components/hydraulic-cylinder/hydraulic-cylinder.component';
import { PneumaticCylinderComponent } from '../components/pneumatic-cylinder/pneumatic-cylinder.component';

//Services
import { Constants } from '../services/constants/constants.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    HydraulicCylinderComponent,
    PneumaticCylinderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Constants
  ]
})
export class AppModule {}
