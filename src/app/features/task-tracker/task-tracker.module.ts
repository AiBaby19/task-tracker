import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TaskListModule } from './task-list/task-list.module';
import { TaskFormModule } from './task-form/task-form.module';

import { TaskTrackerComponent } from './task-tracker.component';

@NgModule({
  declarations: [TaskTrackerComponent],
  imports: [CommonModule, TaskListModule, TaskFormModule, MatButtonModule],
  exports: [TaskTrackerComponent],
})
export class TaskTrackerModule {}
