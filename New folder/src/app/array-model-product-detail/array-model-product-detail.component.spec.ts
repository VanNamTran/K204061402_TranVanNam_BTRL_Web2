import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayModelProductDetailComponent } from './array-model-product-detail.component';

describe('ArrayModelProductDetailComponent', () => {
  let component: ArrayModelProductDetailComponent;
  let fixture: ComponentFixture<ArrayModelProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayModelProductDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayModelProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
