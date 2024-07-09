import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: Router;
  let routerEventsSubject: BehaviorSubject<any>;

  beforeEach(() => {
    // Create a new BehaviorSubject for router events
    routerEventsSubject = new BehaviorSubject<any>(new NavigationEnd(1, '/chapter1', '/chapter1'));

    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: { 
            events: routerEventsSubject.asObservable(),
            url: '/chapter1',
            routerState: { root: {} } 
          }
        }
      ]
    });

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should update chapter title on NavigationEnd event', () => {
    const newUrl = '/chapter2';
    routerEventsSubject.next(new NavigationEnd(1, newUrl, newUrl));
    fixture.detectChanges();
    expect(component.chapter).toBe(component.chapterTitles[newUrl]);
  });

  it('should default to default chapter title if URL not found in chapterTitles', () => {
    const unknownUrl = '/unknown';
    routerEventsSubject.next(new NavigationEnd(1, unknownUrl, unknownUrl));
    fixture.detectChanges();
    expect(component.chapter).toBe('Angular Unit Testing');
  });

  it('should toggle sidebarClosed property', () => {
    expect(component.sidebarClosed).toBeFalse();
    component.toggleSidebar();
    expect(component.sidebarClosed).toBeTrue();
    component.toggleSidebar();
    expect(component.sidebarClosed).toBeFalse();
  });

  // Additional tests can be added as needed

});
