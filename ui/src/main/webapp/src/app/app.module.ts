import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { WordsService } from './core/words/words.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WordsModule } from './words/words.module';
import { ConfirmDialogService } from './dialogs/confirm-dialog.service';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    FlexLayoutModule,
    HttpClientModule,
    WordsModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientModule,
    WordsService,
    ConfirmDialogService,
    CanDeactivateGuard],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
