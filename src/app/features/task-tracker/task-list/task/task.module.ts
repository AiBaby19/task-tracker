import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskFormModule } from '../../task-form/task-form.module';



@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskFormModule
  ],
  exports: [TaskComponent]
})
export class TaskModule { }
