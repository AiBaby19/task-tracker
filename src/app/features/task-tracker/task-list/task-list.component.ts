import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: any[];
  @Input() listType: string;
  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Output() saveEditedTask: EventEmitter<any> = new EventEmitter();
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() unComplete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateTask(task) {
    this.saveEditedTask.emit(task);
  }

  completeTask(id) {
    this.complete.emit(id);
  }

  unCompleteTask(id) {
    this.unComplete.emit(id);
  }

  deleteTask(id) {
    this.delete.emit(id);
  }
}
