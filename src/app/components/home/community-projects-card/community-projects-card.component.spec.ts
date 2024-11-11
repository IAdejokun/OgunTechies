import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityProjectsCardComponent } from './community-projects-card.component';

describe('CommunityProjectsCardComponent', () => {
  let component: CommunityProjectsCardComponent;
  let fixture: ComponentFixture<CommunityProjectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityProjectsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityProjectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
