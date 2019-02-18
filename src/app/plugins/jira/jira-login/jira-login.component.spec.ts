import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraLoginComponent } from './jira-login.component';

describe('JiraLoginComponent', () => {
  let component: JiraLoginComponent;
  let fixture: ComponentFixture<JiraLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
