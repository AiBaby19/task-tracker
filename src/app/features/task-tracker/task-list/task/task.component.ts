import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() listType: string;

  @Output() deleteTask: EventEmitter<number> = new EventEmitter();
  @Output() saveEditedTask: EventEmitter<any> = new EventEmitter();
  isEdit = false;

  @Output() completeTask: EventEmitter<string> = new EventEmitter();
  @Output() unCompleteTask: EventEmitter<string> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  saveEdit(task) {
    task.id = this.task.id;
    this.saveEditedTask.emit(task);
  }

  complete(id) {
    this.completeTask.emit(id);
  }

  unComplete(id) {
    this.unCompleteTask.emit(id)
  }

  delete(id) {
    this.deleteTask.emit(id);
  }
}
