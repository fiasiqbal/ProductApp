import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  title:String = "Edit Product";
  constructor(private productService: ProductService,private router: Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null);
  ngOnInit(): void {
    this.productItem=this.productService.ret();
  }
  EditProduct(){
    this.productService.editProduct(this.productItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/']);
  }

}