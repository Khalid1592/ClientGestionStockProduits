import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitResolver } from './produit/produit.resolver';

const routes: Routes = [
  {path: 'produit', 
  component:ProduitComponent,
  resolve:{
    produits: ProduitResolver
  }
},
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*,{enableTracing:true}*/)],
  exports: [RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule { }
