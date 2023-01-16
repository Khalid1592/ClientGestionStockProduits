import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'login', 
    component:LoginComponent
  },
  {
    path: 'home', 
    component:HomeComponent
  },
  {
    path: 'dashboard', 
    component:DashboardComponent
  },
  {
    path: 'produit', 
  component:ProduitComponent
  },
  {
    path: '', redirectTo:'/home', 
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
