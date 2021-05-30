import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
    constructor(private _router: Router) { }

    redirectToLogin(): void {
        this._router.navigateByUrl("/login");
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let cango: boolean = false;

        if(cango) {
            return cango;
        } else {
            this.redirectToLogin();
            return cango;
        }
    }
}