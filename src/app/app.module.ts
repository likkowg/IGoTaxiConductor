import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBiG1zQ9qFoZhXTGm9zRrFNUAxXC9XDCiA",
  authDomain: "igotaxi-70231.firebaseapp.com",
  databaseURL: "https://igotaxi-70231.firebaseio.com",
  projectId: "igotaxi-70231",
  storageBucket: "igotaxi-70231.appspot.com",
  messagingSenderId: "84785757637"
};

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Geolocation } from '@ionic-native/geolocation';
import { DriverService } from '../services/driver-service';
import { TransactionService } from '../services/transaction-service';
import { ReportService } from '../services/report-service';
import { PlaceService } from '../services/place-service';
import { DealService } from '../services/deal-service';
import { TripService } from '../services/trip-service';
import { AuthService } from '../services/auth-service';
import { SettingService } from '../services/setting-service';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    DriverService,
    ReportService,
    TransactionService,
    PlaceService,
    DealService,
    TripService,
    AuthService,
    SettingService,
  ]
})
export class AppModule {}
