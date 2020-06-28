import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './features/task-tracker/task-list/task/task.component';
import { TaskListComponent } from './features/task-tracker/task-list/task-list.component';
import { TaskTrackerModule } from './features/task-tracker/task-tracker.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TaskTrackerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
