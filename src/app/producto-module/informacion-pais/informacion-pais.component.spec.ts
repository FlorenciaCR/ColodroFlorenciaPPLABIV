import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPaisComponent } from './informacion-pais.component';

describe('InformacionPaisComponent', () => {
  let component: InformacionPaisComponent;
  let fixture: ComponentFixture<InformacionPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
