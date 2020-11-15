import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatIconModule } from '@angular/material';

import { WordDetailsComponent } from './words-details/words-details.component';
import { WordsListComponent } from './words-list/words-list.component';
import { WordsRoutingModule } from './words-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    WordsRoutingModule
  ],
  declarations: [
    WordsListComponent,
    WordDetailsComponent,
  ],
})
export class WordsModule { }
