import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTplComponent } from './login-tpl.component';

describe('LoginTplComponent', () => {
  let component: LoginTplComponent;
  let fixture: ComponentFixture<LoginTplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
