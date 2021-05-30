import { Injectable } from '@angular/core';

const STORAGE_KEY: string = "login"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_logged_in: boolean = false;

  //#region FIXME: repleace this with JWT
  saveStateIntoLocalStorage() {
    localStorage.setItem(STORAGE_KEY, "ok"); 
  }

  isSavedState(): boolean {
    return !!localStorage.getItem(STORAGE_KEY);
  }

  checkStorage(): void {
    if(this.isSavedState() && !this.user_logged_in) {
      this.user_logged_in = true;
    }
  }
  //#endregion

  login(email: string, password: string): boolean {
    if(email == "teszt@teszt.hu" && password == "teszt1234") {
      // FIXME: use fireauth
      this.user_logged_in = true;
      this.saveStateIntoLocalStorage();
    }
  
    return this.user_logged_in;
  }

  logout() {
    this.user_logged_in = false;
    localStorage.removeItem(STORAGE_KEY);
  }

  isLogged(): boolean {
    this.checkStorage();

    return this.user_logged_in;
  }
}
