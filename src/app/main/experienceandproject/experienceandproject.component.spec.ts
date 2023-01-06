import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceandprojectComponent } from './experienceandproject.component';

describe('ExperienceandprojectComponent', () => {
  let component: ExperienceandprojectComponent;
  let fixture: ComponentFixture<ExperienceandprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceandprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceandprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
