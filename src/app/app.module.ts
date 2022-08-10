import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewUserComponent,
    EditUserComponent,
    ProfileComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp( {
      apiKey: "AIzaSyDF8zSpGf6FwO3dstFDpR5ONQi_E5X1mvU",
      authDomain: "chatdemo-e3e2c.firebaseapp.com",
      databaseURL: "https://chatdemo-e3e2c.firebaseio.com",
      projectId: "chatdemo-e3e2c",
      storageBucket: "chatdemo-e3e2c.appspot.com",
      messagingSenderId: "194978591410",
      appId: "1:194978591410:web:64249361493ec7da2dcfab"
    })),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
