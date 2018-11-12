import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor() {
  }

  text = 'Сделать дело, гулять смело';
  done = false;

  onClick() {
    this.done = true;
    console.log(`task ${this.text} done`);
  }

}
