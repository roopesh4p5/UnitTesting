// sidebar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarClosed: boolean = false;
  chapter: string = "Angular Unit Testing";

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateChapter(event.urlAfterRedirects);
    });
  }

  toggleSidebar() {
    this.sidebarClosed = !this.sidebarClosed;
  }

  private updateChapter(url: string) {
    switch (url) {
      case '/chapter1':
        this.chapter = "Introduction to Automated Testing";
        break;
      case '/chapter2':
        this.chapter = "Different types of tests";
        break;
      case '/chapter3':
        this.chapter = "The Angular Testing Tools-Toolchain";
        break;
      case '/chapter4':
        this.chapter = "Setup Angular Test";
        break;
      case '/chapter5':
        this.chapter = "Advanced Angular Testing Techniques";
        break;
      case '/chapter6':
        this.chapter = "Starting with Unit Testing";
        break;
      case '/chapter7':
        this.chapter = "Code Coverage";
        break;
      case '/chapter8':
        this.chapter = "Working with Integration Testing";
        break;
      default:
        this.chapter = "Angular Unit Testing";
        break;
    }
  }
}