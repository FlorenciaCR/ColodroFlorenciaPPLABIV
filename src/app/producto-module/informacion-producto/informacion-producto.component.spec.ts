import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionProductoComponent } from './informacion-producto.component';

describe('InformacionProductoComponent', () => {
  let component: InformacionProductoComponent;
  let fixture: ComponentFixture<InformacionProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
