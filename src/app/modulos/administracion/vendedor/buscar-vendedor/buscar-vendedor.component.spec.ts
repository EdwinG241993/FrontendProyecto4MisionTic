import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVendedorComponent } from './buscar-vendedor.component';

describe('BuscarVendedorComponent', () => {
  let component: BuscarVendedorComponent;
  let fixture: ComponentFixture<BuscarVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
