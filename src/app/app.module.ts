import { PendentePage } from './../pages/pendente/pendente';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { InformationServiceProvider } from '../providers/information-service/information-service';

export const fireBaseConfig = {
    apiKey: "AIzaSyA1Xhih7MpRX38JBHIdF5hL-aqV3OoCNks",
    authDomain: "uniajuda-e4543.firebaseapp.com",
    databaseURL: "https://uniajuda-e4543.firebaseio.com",
    projectId: "uniajuda-e4543",
    storageBucket: "",
    messagingSenderId: "730896291552"

};

@NgModule({
    declarations: [
        MyApp,
        TabsPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(fireBaseConfig),
        AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    // Páginas que podem ser acessadas no app
    entryComponents: [
        MyApp,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        LoginServiceProvider,
        InformationServiceProvider
    ]
})
export class AppModule { }