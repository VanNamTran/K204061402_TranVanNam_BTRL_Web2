import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProductService {
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

  constructor() { } getProductsWithImages()
  {
  return this.products
  }
  getProductDetail(id:any){

  return this.products.find(x=>x.productid==id)
  }
  datas=[
    {"Cateid":"cate1","CateName":"nuoc ngot", "Products":[
      {"ProductId":"p1","ProductName":"Coca","Price":100, "Image":"./assets/cocktail.png"},
      {"ProductId":"p2","ProductName":"Pepsi","Price":300, "Image":"./assets/frappe.png"},
      {"ProductId":"p3","ProductName":"Sting","Price":200, "Image":"./assets/juice.png"},
    ]},
    {"Cateid":"cate2","CateName":"Bia", "Products":[
      {"ProductId":"p4","ProductName":"Heleiken","Price":500, "Image":"./assets/beer.png"},
      {"ProductId":"p5","ProductName":"333","Price":400, "Image":"./assets/beer3.png"},
      {"ProductId":"p6","ProductName":"Sai Gon","Price":600, "Image":"./assets/beer2.png"},
    ]}];
    getData() {
      return this.datas;
    }
}
// export class DataService {
//   datas=[
//   {"Cateid":"cate1","CateName":"nuoc ngot", "Products":[
//     {"ProductId":"p1","ProductName":"Coca","Price":100, "Image":"assets/h1.png"},
//     {"ProductId":"p2","ProductName":"Pepsi","Price":300, "Image":"assets/h2.png"},
//     {"ProductId":"p3","ProductName":"Sting","Price":200, "Image":"assets/h3.png"},
//   ]},
//   {"Cateid":"cate2","CateName":"Bia", "Products":[
//     {"ProductId":"p4","ProductName":"Heleiken","Price":500, "Image":"assets/h4.png"},
//     {"ProductId":"p5","ProductName":"333","Price":400, "Image":"assets/h5.png"},
//     {"ProductId":"p6","ProductName":"Sai Gon","Price":600, "Image":"assets/h6.png"},
//   ]}
//   ];
//   constructor() { }

//   getData() {
//     return this.datas;
//   }
// }
