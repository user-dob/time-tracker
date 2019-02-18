import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSettingsComponent } from './github-settings.component';

describe('GithubSettingsComponent', () => {
  let component: GithubSettingsComponent;
  let fixture: ComponentFixture<GithubSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
