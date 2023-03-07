import { Component, OnInit } from '@angular/core';
import { DataProductService } from '../data-product.service';
import {ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent  {

  public products:any
  constructor(pservice:DataProductService ){
     this.products=pservice.getData()
  }

}
