import { Component, Input } from '@angular/core';

// @NgModule({
//   imports: [],
//   exports: [TaskComponent],
//   declarations: [TaskComponent],
//   providers: [],
// })

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor() {
  }

  @Input() text: string;
  @Input() done: boolean;

  onClick() {
    if (this.done) {
      return;
    }
    this.done = true;
    console.log(`task ${this.text} done`);
  }

}
