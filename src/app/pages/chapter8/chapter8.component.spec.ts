import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter8Component } from './chapter8.component';

describe('Chapter8Component', () => {
  let component: Chapter8Component;
  let fixture: ComponentFixture<Chapter8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter8Component]
    });
    fixture = TestBed.createComponent(Chapter8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
