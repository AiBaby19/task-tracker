import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<number> = new EventEmitter();
  @Output() saveEditedTask: EventEmitter<any> = new EventEmitter();
  isEdit = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  saveEdit(task) {
    task.id = this.task.id;
    this.saveEditedTask.emit(task);
  }

  delete(id) {
    this.deleteTask.emit(id);
  }
}
