import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AlertComponent } from './directives/alert.component';
import { AlertService } from './services/alert.service';
import { FormsModule } from '@angular/forms';
//import { BackpartComponent } from './backpart/backpart.component';
import { LogregComponent } from './logreg/logreg.component';   
import { InternationalComponent } from './international/international.component';
import { TrendingComponent } from './trending/trending.component';
import { RegionalComponent } from './regional/regional.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    LogregComponent,
    InternationalComponent,
    TrendingComponent,
    RegionalComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA7lyqhcA3uQgLPFx7IAhCvaaAK8y2jZxc",
      authDomain: "audio-908a1.firebaseapp.com",
      projectId: "audio-908a1",
      storageBucket: "audio-908a1.appspot.com",
      messagingSenderId: "1020097360051",
      appId: "1:1020097360051:web:5ce11eab000c41909600c6",
      measurementId: "G-XZ9MMXCL2D"
    })
  ],
  providers: [FirebaseService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
