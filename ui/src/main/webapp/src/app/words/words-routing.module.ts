import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordDetailsComponent } from './words-details/words-details.component';
import { WordsListComponent } from './words-list/words-list.component';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'words',
    component: WordsListComponent,
    data: { animation: 'master' }
  }, {
    path: 'words/detail',
    component: WordDetailsComponent,
    canDeactivate: [CanDeactivateGuard],
    data: { animation: 'detail' }
  }, {
    path: 'words/detail/:id',
    component: WordDetailsComponent,
    canDeactivate: [CanDeactivateGuard],
    data: { animation: 'detail' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule { }
