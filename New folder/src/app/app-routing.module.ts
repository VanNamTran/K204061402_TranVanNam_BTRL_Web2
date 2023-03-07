import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayModelProductDetailComponent } from './array-model-product-detail/array-model-product-detail.component';
import { ArrayModelProductComponent } from './array-model-product/array-model-product.component';
import { BindingClassComponent } from './binding-class/binding-class.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { BindingPropertyComponenComponent } from './binding-property-componen/binding-property-componen.component';
import { BindingStyleComponent } from './binding-style/binding-style.component';
import { BindingTwoWayComponent } from './binding-two-way/binding-two-way.component';
import { ModelProductComponent } from './model-product/model-product.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { QuadraticEquationComponent } from './quadratic-equation/quadratic-equation.component';

const routes: Routes = [
  {path:"quadrtic-equation", component:QuadraticEquationComponent},
  {path:"model-product",component:ModelProductComponent},
  {path:"binding-style",component:BindingStyleComponent},
  {path:'service-product-model', component:ArrayModelProductComponent},
  {path:'service-product-model/:id', component:ArrayModelProductDetailComponent},
  {path:'*+-',component:BindingEventComponent},
  {path:"list-product",component:ProductCatalogComponent},
  {path:"binding-property",component:BindingPropertyComponenComponent},
  {path:"binding-class",component:BindingClassComponent},
  {path:"binding-event",component:BindingEventComponent},
  {path:'binding-two-way',component:BindingTwoWayComponent},
  {path:"binding",component:MyComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponentZ=[
  QuadraticEquationComponent,
  ModelProductComponent,
  BindingStyleComponent,
  ArrayModelProductComponent,
  ArrayModelProductDetailComponent,
  ProductCatalogComponent
]
