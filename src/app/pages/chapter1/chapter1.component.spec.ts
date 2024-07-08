import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter1Component } from './chapter1.component';

describe('Chapter1Component', () => {
  let component: Chapter1Component;
  let fixture: ComponentFixture<Chapter1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter1Component]
    });
    fixture = TestBed.createComponent(Chapter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
