import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';


const PRODUITS: Produit[] = [{ref:'Livre',  quantite:50, prixUnitaire:20},
{ref:'Cahier', quantite:200, prixUnitaire:5.25}, 
{ref:'Stylo', quantite:500, prixUnitaire:2.10}];

@Injectable()
export class ProduitMockService {

    public getProduits():Produit[]{
        return PRODUITS;
    }

}