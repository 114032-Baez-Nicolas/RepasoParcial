import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelvaProntoComponent } from './vuelva-pronto.component';

describe('VuelvaProntoComponent', () => {
  let component: VuelvaProntoComponent;
  let fixture: ComponentFixture<VuelvaProntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VuelvaProntoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuelvaProntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
