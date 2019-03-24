import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  userName: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userName = this.authService.currentUser;
  }
}
