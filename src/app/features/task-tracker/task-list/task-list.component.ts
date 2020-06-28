import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: any[];
  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Output() saveEditedTask: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteTask(id) {
    this.delete.emit(id);
  }

  updateTask(task) {
    this.saveEditedTask.emit(task);
  }
}
