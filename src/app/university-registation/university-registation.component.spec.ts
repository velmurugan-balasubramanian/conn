import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityRegistationComponent } from './university-registation.component';

describe('UniversityRegistationComponent', () => {
  let component: UniversityRegistationComponent;
  let fixture: ComponentFixture<UniversityRegistationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityRegistationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityRegistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
