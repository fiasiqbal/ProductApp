import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductModel } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product:ProductModel
  constructor(private http:HttpClient) { }
  getProducts() {
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item) {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }
  setter(item) {
    this.product = item;
  }
  ret() {
    return this.product;
  }
  editProduct(item) {
    return this.http.put("http://localhost:3000/edit",{"product":item})
    .subscribe(data=>{console.log(data)})
  }
  deleteProduct(id) {
    return this.http.delete("http://localhost:3000/delete/"+id)
  }
}