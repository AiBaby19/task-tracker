import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListModule } from './task-list/task-list.module';
import { TaskFormModule } from './task-form/task-form.module';

import { TaskTrackerComponent } from './task-tracker.component';



@NgModule({
  declarations: [TaskTrackerComponent],
  imports: [
    CommonModule,
    TaskListModule,
    TaskFormModule
  ],
  exports: [TaskTrackerComponent]
})
export class TaskTrackerModule { }
