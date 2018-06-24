import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniRegistrationComponent } from './uni-registration.component';

describe('UniRegistrationComponent', () => {
  let component: UniRegistrationComponent;
  let fixture: ComponentFixture<UniRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
