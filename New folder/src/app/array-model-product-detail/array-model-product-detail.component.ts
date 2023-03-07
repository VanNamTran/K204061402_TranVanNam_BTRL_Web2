import { Component } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {DataProductService} from '../data-product.service'

@Component({
  selector: 'app-array-model-product-detail',
  templateUrl: './array-model-product-detail.component.html',
  styleUrls: ['./array-model-product-detail.component.css']
})
export class ArrayModelProductDetailComponent {
  selectedProduct:any
  constructor(private activateRoute:ActivatedRoute,private _fs:DataProductService, private router:Router)
  {
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')

        if(id!=null)
        {
        this.selectedProduct=_fs.getProductDetail(id)
        }
      }
    )
  }
  goBack(){
  this.router.navigate(['service-product-model'])
  }

}
