import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarClosed = false;
  chapter = 'Angular Unit Testing';
  chapterTitles: Record<string, string> = {
    '/chapter1': 'Introduction to Automated Testing',
    '/chapter2': 'Different types of tests',
    '/chapter3': 'The Angular Testing Tools-Toolchain',
    '/chapter4': 'Setup Angular Test',
    '/chapter5': 'Advanced Angular Testing Techniques',
    '/chapter6': 'Starting with Unit Testing',
    '/chapter7': 'Code Coverage',
    '/chapter8': 'Working with Integration Testing'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateChapter(event.urlAfterRedirects);
    });
  }

  toggleSidebar(): void {
    this.sidebarClosed = !this.sidebarClosed;
  }

  private updateChapter(url: string): void {
    this.chapter = this.chapterTitles[url] || 'Angular Unit Testing';
  }
}
