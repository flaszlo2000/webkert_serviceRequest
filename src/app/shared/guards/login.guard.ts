import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
    constructor(private _router: Router, private auth: AuthService) { }

    redirectToLogin(): void {
        this._router.navigateByUrl("/login");
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged_in: boolean = this.auth.isLogged();

        if(logged_in) {
            return logged_in;
        } else {
            this.redirectToLogin();
            return logged_in;
        }
    }
}