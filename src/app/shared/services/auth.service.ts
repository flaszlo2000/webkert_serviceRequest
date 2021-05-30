import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_logged_in: boolean = false;

  login(email: string, password: string): void {
    if(email == "teszt@teszt.hu" && password == "teszt1234") {
      // FIXME: use fireauth
      this.user_logged_in = true;
    }
  }

  logout() {
    this.user_logged_in = false;
  }

  isLogged(): boolean {
    return this.user_logged_in;
  }
}
