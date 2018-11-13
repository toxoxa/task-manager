import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {

  jobs: any;
  constructor() {
    this.jobs = [
      {
        text: 'Сделать дело, гулять смело',
        done: false
      },
      {
        text: 'Задача 1',
        done: false
      },
      {
        text: 'Задача 2',
        done: false
      },
      {
        text: 'Задача 3',
        done: false
      },
      {
        text: 'Задача 4',
        done: false
      }
    ];
  }

  ngOnInit() {
  }
}
