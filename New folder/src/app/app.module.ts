import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponentZ } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingPropertyComponenComponent } from './binding-property-componen/binding-property-componen.component';
import { BindingClassComponent } from './binding-class/binding-class.component';
import { BindingStyleComponent } from './binding-style/binding-style.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { FormsModule } from '@angular/forms';
import { BindingTwoWayComponent } from './binding-two-way/binding-two-way.component';
import { QuadraticEquationComponent } from './quadratic-equation/quadratic-equation.component';
import { LunarYearComponent } from './lunar-year/lunar-year.component';
import { ModelProductComponent } from './model-product/model-product.component';
import { ArrayModelProductComponent } from './array-model-product/array-model-product.component';
import { ArrayModelProductDetailComponent } from './array-model-product-detail/array-model-product-detail.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { DataProductService } from './data-product.service';
import { MyComponentComponent } from './my-component/my-component.component';
@NgModule({
  declarations: [
    AppComponent,
    BindingPropertyComponenComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    QuadraticEquationComponent,
    LunarYearComponent,
    ModelProductComponent,

    RoutingComponentZ,
     ArrayModelProductComponent,
     ArrayModelProductDetailComponent,
     ProductCatalogComponent,
     MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
