import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetQuizComponent } from './set-quiz.component';

describe('SetQuizComponent', () => {
  let component: SetQuizComponent;
  let fixture: ComponentFixture<SetQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
