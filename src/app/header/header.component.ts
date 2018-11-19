import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../DataProvider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  title = 'Awesome Task Manager';

  scrollTop() {
    const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
      window.scrollBy(0, -100);
      setTimeout(this.scrollTop(), 20);
    }
  }
}
