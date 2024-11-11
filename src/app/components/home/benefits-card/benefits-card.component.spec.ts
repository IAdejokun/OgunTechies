import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsCardComponent } from './benefits-card.component';

describe('BenefitsCardComponent', () => {
  let component: BenefitsCardComponent;
  let fixture: ComponentFixture<BenefitsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
