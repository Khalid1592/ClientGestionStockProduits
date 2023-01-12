import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Produit } from '../shared/produit';

@Injectable()
export class ProduitService{

    constructor(private http: HttpClient){

    }

    getProduits(): Observable<any>{
        return this.http.get(API_URLS.PRODUITS_URLS);
    }

    addProduit(produit:Produit): Observable<any>{
        return this.http.post(API_URLS.PRODUITS_URLS, produit);
    }

    updateProduit(produit:Produit): Observable<any>{
       return this.http.put(API_URLS.PRODUITS_URLS, produit);
    }

    deleteProduit(ref:string): Observable<any>{
        return this.http.delete(API_URLS.PRODUITS_URLS + `/${ref}`);
    }
}