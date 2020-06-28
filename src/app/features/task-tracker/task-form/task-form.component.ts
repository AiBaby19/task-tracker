import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() submitTask: EventEmitter<any> = new EventEmitter();
  taskForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl()
    })
  }

  onTaskSubmit() {
    this.submitTask.emit(this.taskForm.value)
  }

}
