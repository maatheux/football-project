import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLineupsComponent } from './team-lineups.component';

describe('TeamLineupsComponent', () => {
  let component: TeamLineupsComponent;
  let fixture: ComponentFixture<TeamLineupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamLineupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLineupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
