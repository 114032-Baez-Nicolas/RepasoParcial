import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionVueloComponent } from './seccion-vuelo.component';

describe('SeccionVueloComponent', () => {
  let component: SeccionVueloComponent;
  let fixture: ComponentFixture<SeccionVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionVueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
