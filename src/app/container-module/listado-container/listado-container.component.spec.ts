import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoContainerComponent } from './listado-container.component';

describe('ListadoContainerComponent', () => {
  let component: ListadoContainerComponent;
  let fixture: ComponentFixture<ListadoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
