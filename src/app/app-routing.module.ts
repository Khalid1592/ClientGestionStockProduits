import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProduitResolver } from './produit/produit.resolver';


const routes: Routes = [
  {
    path: 'login', 
    component:LoginComponent
  },
  {
    path: 'home', 
    component:HomeComponent,
    children:[
      {
        path: 'dashboard', 
        component:DashboardComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'produit', 
        component:ProduitComponent,
        resolve: {
          produits: ProduitResolver
        },
        outlet: 'contentOutlet'
      }
    ]
  },
  {
    path: '', redirectTo:'/home', 
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule { }
