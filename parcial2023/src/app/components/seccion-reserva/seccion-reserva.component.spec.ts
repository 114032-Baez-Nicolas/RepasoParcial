import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionReservaComponent } from './seccion-reserva.component';

describe('SeccionReservaComponent', () => {
  let component: SeccionReservaComponent;
  let fixture: ComponentFixture<SeccionReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionReservaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
