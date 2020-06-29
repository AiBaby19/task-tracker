import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss'],
})
export class TaskTrackerComponent implements OnInit {
  todo: any[] = [
    { id: '1', title: 'feed cat', content: 'food is in the kitchen' },
    { id: '2', title: 'feed dog', content: 'food is in the kitchen' },
    { id: '3', title: 'feed kid', content: 'food is in the kitchen' },
  ];

  done: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  addTask(task) {
    // temp id (until id from server is given)
    task.id = this.generateRandomId();

    this.todo.push(task);
  }

  updateTask(task, tasksArr) {
    this[tasksArr] = this[tasksArr].map((item) => (item.id === task.id ? task : item));
  }

  generateRandomId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  transferTask(id, from, to) {
    const taskIndex = this[from].findIndex((task) => task.id === id);
    this[to].push(this[from][taskIndex]);
    this[from].splice(taskIndex, 1);
  }

  deleteTask(id, tasksArr) {
    this[tasksArr] = this[tasksArr].filter((x) => x.id !== id);
  }
}
