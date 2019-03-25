import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  cancel(): void {
    this.close.emit();
  }
  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;

      this.authService.login(userName, password);
      this.cancel();
      this.router.navigate(['/userDetails']);
    }
  }
}
