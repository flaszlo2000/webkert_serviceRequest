import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth_service: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth_service.logout();
    this._router.navigateByUrl("/login");
  }
}
