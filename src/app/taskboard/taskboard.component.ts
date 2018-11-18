import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  jobsInWork: any;
  jobsDone: any;
  constructor() {
    this.jobsInWork = [
      {
        text: 'Сделать дело, гулять смело',
        done: false,
        id: '1'
      },
      {
        text: 'Задача 1',
        done: false,
        id: '2'
      },
      {
        text: 'Задача 2',
        done: false,
        id: '3'
      },
      {
        text: 'Задача 3',
        done: false,
        id: '4'
      },
      {
        text: 'Задача 4',
        done: false,
        id: '5'
      }
    ];

    this.jobsDone = [
      {
        text: 'Выполненная задача',
        done: true,
        id: '13'
      },
      {
        text: 'Выполненная не мной задача',
        done: true,
        id: '14'
      }
    ];
  }

  onClick(id) {
    const job = this.jobsInWork.filter(j => {
      return j.id === id;
    })[0];
    this.jobsInWork = this.jobsInWork.filter(j => {
      return j.id !== id;
    });
    job.done = true;
    this.jobsDone.push(job);
  }

  onAddTask(text) {
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    text = text.trim();
    text.length && this.jobsInWork.push({
      text,
      done: false,
      id: guid()
    });
  }

  DeleteTask(id, done) {
    if (done) {
      this.jobsDone.splice(id, 1);
    } else {
      this.jobsInWork.splice(id, 1);
    }
  }
}
