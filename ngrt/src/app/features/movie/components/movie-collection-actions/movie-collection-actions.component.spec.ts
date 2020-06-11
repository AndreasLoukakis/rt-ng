import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCollectionActionsComponent } from './movie-collection-actions.component';

describe('MovieCollectionActionsComponent', () => {
  let component: MovieCollectionActionsComponent;
  let fixture: ComponentFixture<MovieCollectionActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCollectionActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCollectionActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
