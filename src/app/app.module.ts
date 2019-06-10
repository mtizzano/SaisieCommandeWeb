import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseOptions } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { environment } from 'src/environments/environment';


/* var config: FirebaseOptions = {
  apiKey: "AIzaSyB9ML0pssdaRyVA-Pjb6sajfmtOISsVEa0",
  authDomain: "saisie-commande-web.firebaseapp.com",
  databaseURL: "https://saisie-commande-web.firebaseio.com",
  projectId: "saisie-commande-web",
  storageBucket: "saisie-commande-web.appspot.com",
  messagingSenderId: "131831609732",
  appId: "1:131831609732:web:aaf47b3f3d04dc1f"
}; */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
