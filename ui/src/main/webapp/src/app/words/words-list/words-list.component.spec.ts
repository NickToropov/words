import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsListComponent } from './words-list.component';

describe('WordsListComponent', () => {
  let component: WordsListComponent;
  let fixture: ComponentFixture<WordsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
