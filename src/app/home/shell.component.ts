import { slideInAnimation } from './../app.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less'],
  animations: [slideInAnimation]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
