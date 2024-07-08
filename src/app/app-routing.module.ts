import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter1Component } from './pages/chapter1/chapter1.component';
import { Chapter2Component } from './pages/chapter2/chapter2.component';
import { Chapter3Component } from './pages/chapter3/chapter3.component';
import { Chapter4Component } from './pages/chapter4/chapter4.component';
import { Chapter5Component } from './pages/chapter5/chapter5.component';
import { Chapter6Component } from './pages/chapter6/chapter6.component';
import { Chapter7Component } from './pages/chapter7/chapter7.component';
import { Chapter8Component } from './pages/chapter8/chapter8.component';

const routes: Routes = [
  { path: 'chapter1', component: Chapter1Component },
  { path: 'chapter2', component: Chapter2Component },
  { path: 'chapter3', component: Chapter3Component },
  { path: 'chapter4', component: Chapter4Component },
  { path: 'chapter5', component: Chapter5Component },
  { path: 'chapter6', component: Chapter6Component },
  { path: 'chapter7', component: Chapter7Component },
  { path: 'chapter8', component: Chapter8Component },

  { path: '', redirectTo: '/chapter1', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
