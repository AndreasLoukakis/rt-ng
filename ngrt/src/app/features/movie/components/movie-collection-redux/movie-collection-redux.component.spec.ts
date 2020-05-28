import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCollectionReduxComponent } from './movie-collection-redux.component';

describe('MovieCollectionReduxComponent', () => {
  let component: MovieCollectionReduxComponent;
  let fixture: ComponentFixture<MovieCollectionReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCollectionReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCollectionReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
