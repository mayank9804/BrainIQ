import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySchoolComponent } from './my-school.component';

describe('MySchoolComponent', () => {
  let component: MySchoolComponent;
  let fixture: ComponentFixture<MySchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
