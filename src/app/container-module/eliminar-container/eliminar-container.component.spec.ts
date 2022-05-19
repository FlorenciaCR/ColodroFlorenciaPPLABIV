import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContainerComponent } from './eliminar-container.component';

describe('EliminarContainerComponent', () => {
  let component: EliminarContainerComponent;
  let fixture: ComponentFixture<EliminarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
