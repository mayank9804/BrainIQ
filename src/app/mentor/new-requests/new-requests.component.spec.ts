import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestsComponent } from './new-requests.component';

describe('NewRequestsComponent', () => {
  let component: NewRequestsComponent;
  let fixture: ComponentFixture<NewRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
