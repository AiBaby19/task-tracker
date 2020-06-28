import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss'],
})
export class TaskTrackerComponent implements OnInit {
  tasks: any[] = [
    { id: '1', title: 'feed cat', content: 'food is in the kitchen' },
    { id: '2', title: 'feed dog', content: 'food is in the kitchen' },
    { id: '3', title: 'feed kid', content: 'food is in the kitchen' },
  ];
  constructor() {}

  ngOnInit(): void {}

  addTask(task) {
    // temp id (until id from server is given)
    task.id = this.generateRandomId();

    this.tasks.push(task);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((x) => x.id !== id);
  }

  updateTask(task) {
    this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
  }

  generateRandomId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}
