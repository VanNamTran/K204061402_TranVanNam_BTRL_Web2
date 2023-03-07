import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPropertyComponenComponent } from './binding-property-componen.component';

describe('BindingPropertyComponenComponent', () => {
  let component: BindingPropertyComponenComponent;
  let fixture: ComponentFixture<BindingPropertyComponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingPropertyComponenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingPropertyComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
