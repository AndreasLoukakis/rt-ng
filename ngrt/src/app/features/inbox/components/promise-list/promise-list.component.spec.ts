import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseListComponent } from './promise-list.component';

describe('PromiseListComponent', () => {
  let component: PromiseListComponent;
  let fixture: ComponentFixture<PromiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
