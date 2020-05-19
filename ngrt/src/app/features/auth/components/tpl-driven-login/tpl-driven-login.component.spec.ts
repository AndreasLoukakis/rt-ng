import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TplDrivenLoginComponent } from './tpl-driven-login.component';

describe('TplDrivenLoginComponent', () => {
  let component: TplDrivenLoginComponent;
  let fixture: ComponentFixture<TplDrivenLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TplDrivenLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TplDrivenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
