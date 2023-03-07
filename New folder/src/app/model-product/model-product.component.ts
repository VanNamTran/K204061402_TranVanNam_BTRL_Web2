import { Component } from '@angular/core';

@Component({
  selector: 'app-model-product',
  templateUrl: './model-product.component.html',
  styleUrls: ['./model-product.component.css']
})
export class ModelProductComponent {
  product={
    'productid':123,
    'productName':'thuốc thần tiên',
    'productPrice':100000,
    'productImage':'./assets/co.jpg'
  }
  public image='images'
  public imageListProduct='imageList'
  public flex='flex'
  products=[
    {
      'productid':342834,
      'productName':'Cocltail',
      'productPrice':90000,
      'productImage':'./assets/cocktail.png'
    },
    {
      'productid':398834,
      'productName':'Freppe',
      'productPrice':70000,
      'productImage':'./assets/frappe.png'
    },
    {
      'productid':344534,
      'productName':'Orange Juice',
      'productPrice':60000,
      'productImage':'./assets/juice.png'
    },
  ]
}
