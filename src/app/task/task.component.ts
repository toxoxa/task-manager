import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() id: string;

  @Output() Clicked = new EventEmitter<string>();
  @Output() Deleted = new EventEmitter<string>();

  onClick() {
    if (this.done) {
      return;
    }
    this.done = true;
    console.log(`task ${this.text} with id ${this.id} done`);
    this.Clicked.emit(this.id);
  }

  onDelete() {
    console.log(`task ${this.text} with id ${this.id} deleted`);
    this.Deleted.emit(this.id);
  }
}
