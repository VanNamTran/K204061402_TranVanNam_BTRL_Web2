import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayModelProductComponent } from './array-model-product.component';

describe('ArrayModelProductComponent', () => {
  let component: ArrayModelProductComponent;
  let fixture: ComponentFixture<ArrayModelProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayModelProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayModelProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
