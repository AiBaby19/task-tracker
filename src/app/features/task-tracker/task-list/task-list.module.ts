import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskModule } from './task/task.module';
import { DragDropModule } from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    TaskModule,
    DragDropModule
  ],
  exports: [TaskListComponent]
})
export class TaskListModule { }
