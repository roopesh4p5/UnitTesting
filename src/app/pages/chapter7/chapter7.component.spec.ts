import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter7Component } from './chapter7.component';

describe('Chapter7Component', () => {
  let component: Chapter7Component;
  let fixture: ComponentFixture<Chapter7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter7Component]
    });
    fixture = TestBed.createComponent(Chapter7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
