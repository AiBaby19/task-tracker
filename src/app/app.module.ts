import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TaskTrackerModule } from './features/task-tracker/task-tracker.module';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, DragDropModule, TaskTrackerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
