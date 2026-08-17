import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productAPIResponse } from './product-data-type';


@Injectable({
    providedIn: 'root',
})
export class ProductService {
    apiUrl = "https://dummyjson.com/products";
    constructor(private http: HttpClient){

    }

    getProducts(){
        return this.http.get<productAPIResponse>(this.apiUrl);
    }
}
