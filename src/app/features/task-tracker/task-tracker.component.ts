import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss']
})
export class TaskTrackerComponent implements OnInit {
  tasks: any[] = [
    {title: 'feed cat', content: 'food is in the kitchen'},
    {title: 'feed dog', content: 'food is in the kitchen'},
    {title: 'feed kid', content: 'food is in the kitchen'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addTask(task) {
    this.tasks.push(task)
  }
}
