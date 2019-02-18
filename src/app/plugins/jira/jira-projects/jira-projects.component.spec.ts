import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraProjectsComponent } from './jira-projects.component';

describe('JiraProjectsComponent', () => {
  let component: JiraProjectsComponent;
  let fixture: ComponentFixture<JiraProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
