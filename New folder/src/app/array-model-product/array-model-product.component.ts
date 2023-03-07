import { Component } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {DataProductService} from '../data-product.service'

@Component({
  selector: 'app-array-model-product',
  templateUrl: './array-model-product.component.html',
  styleUrls: ['./array-model-product.component.css']
})
export class ArrayModelProductComponent {
  public products:any
  constructor(pservice:DataProductService ,private router:Router){
     this.products=pservice.getProductsWithImages()
  }
  viewDetail(f:any)
  {
  this.router.navigate(['/service-product-model',f.productid])
  }


}
