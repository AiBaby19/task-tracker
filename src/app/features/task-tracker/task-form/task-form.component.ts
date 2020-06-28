import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Output() submitTask: EventEmitter<any> = new EventEmitter();
  @Input() taskToEdit: any;

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: this.taskToEdit?.title || '',
      content: this.taskToEdit?.content || '',
    });
  }

  get title() {
    return this.taskToEdit?.title || 'Title';
  }

  get content() {
    return this.taskToEdit?.content || 'Content';
  }

  onTaskSubmit() {
    this.submitTask.emit(this.taskForm.value);
    this.taskForm.reset();
  }
}
