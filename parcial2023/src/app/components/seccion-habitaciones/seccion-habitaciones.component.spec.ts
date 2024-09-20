import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionHabitacionesComponent } from './seccion-habitaciones.component';

describe('SeccionHabitacionesComponent', () => {
  let component: SeccionHabitacionesComponent;
  let fixture: ComponentFixture<SeccionHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionHabitacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
