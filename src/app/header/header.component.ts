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
    // todo добавить прокрутку на начало страницы при клике
  }

}
