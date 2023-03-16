import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './utils/footer/footer.component';
import { LearnComponent } from './pages/learn/learn.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivComponent } from './pages/priv/priv.component';
import { ReturnComponent } from './pages/return/return.component';
import { FieldComponent } from './pages/field/field.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { Singlepage2Component } from './pages/singlepage2/singlepage2.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { AquaComponent } from './pages/aqua/aqua.component';
import { Single3Component } from './pages/single3/single3.component';
import { OrgaComponent } from './pages/orga/orga.component';
import { Single4Component } from './pages/single4/single4.component';
import { ProductsComponent } from './pages/products/products.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TechComponent } from './pages/tech/tech.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    LearnComponent,
    ContactComponent,
    TermsComponent,
    PrivComponent,
    ReturnComponent,
    FieldComponent,
    SinglepageComponent,
    Singlepage2Component,
    AnimalComponent,
    AquaComponent,
    Single3Component,
    OrgaComponent,
    Single4Component,
    ProductsComponent,
    SigninComponent,
    SignupComponent,
    TechnologiesComponent,
    TechComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
