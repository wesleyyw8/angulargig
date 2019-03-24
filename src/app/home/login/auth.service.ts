import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    currentUser: string;

    constructor() {  }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }
    getUserName(): string {
      return this.currentUser;
    }

    login(userName: string, password: string): void {
        this.currentUser = userName;
    }

    logout(): void {
        this.currentUser = null;
    }
}
