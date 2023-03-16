import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { AquaComponent } from './pages/aqua/aqua.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FieldComponent } from './pages/field/field.component';
import { HomeComponent } from './pages/home/home.component';
import { OrgaComponent } from './pages/orga/orga.component';
import { PrivComponent } from './pages/priv/priv.component';
import { ProductsComponent } from './pages/products/products.component';
import { ReturnComponent } from './pages/return/return.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Single3Component } from './pages/single3/single3.component';
import { Single4Component } from './pages/single4/single4.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { Singlepage2Component } from './pages/singlepage2/singlepage2.component';
import { TechComponent } from './pages/tech/tech.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"buy", component:TechnologiesComponent},
  {path:"home", component:HomeComponent},
  {
    path:"about",component:AboutComponent
  },
  {
    path:"contactus",component:ContactComponent
  },
  {
    path:"terms",component:TermsComponent
  },
  {
    path:"priv",component:PrivComponent
  },
  {
    path:"return",component:ReturnComponent
  },
  {
    path:"field",component:FieldComponent
  },
  {
    path:"animal",component:AnimalComponent
  },
  {
    path:"aqua",component:AquaComponent
  },
  {
    path:"orga",component:OrgaComponent
  },
  {
    path:"product",component:ProductsComponent
  },
  {
    path:"signin",component:SigninComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  
  
  {
    path:"single",component:SinglepageComponent
  },
  {
    path:"single2",component:Singlepage2Component
  },
  {
    path:"single3",component:Single3Component
  },
  {
    path:"single4",component:Single4Component
  },
  {
    path:"tech",component:TechComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
