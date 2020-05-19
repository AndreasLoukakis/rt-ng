import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCollectionItemEditorComponent } from './movie-collection-item-editor.component';

describe('MovieCollectionItemEditorComponent', () => {
  let component: MovieCollectionItemEditorComponent;
  let fixture: ComponentFixture<MovieCollectionItemEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCollectionItemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCollectionItemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
