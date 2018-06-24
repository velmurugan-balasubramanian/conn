import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniLoginComponent } from './uni-login.component';

describe('UniLoginComponent', () => {
  let component: UniLoginComponent;
  let fixture: ComponentFixture<UniLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
