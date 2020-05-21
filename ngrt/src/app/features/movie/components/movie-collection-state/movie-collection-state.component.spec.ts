import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCollectionStateComponent } from './movie-collection-state.component';

describe('MovieCollectionStateComponent', () => {
  let component: MovieCollectionStateComponent;
  let fixture: ComponentFixture<MovieCollectionStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCollectionStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCollectionStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
