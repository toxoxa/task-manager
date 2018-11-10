import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../DataProvider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title = 'Awesome Task Manager';

  ngOnInit() {
    // const dp = new DataProvider();
    // dp.testMethod();
    // todo добавить прокрутку на начало страницы при клике
  }

}
