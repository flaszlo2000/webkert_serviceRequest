import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form_group: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  });

  constructor(private login_service: AuthService, private _router: Router) { }


  ngOnInit() {
    this.login_service.logout();
  }

  login(): void {
    console.log("asd");
    let allowedToRedirect: boolean = this.login_service.login(this.form_group.value.email, this.form_group.value.password);
    
    if(allowedToRedirect) {
      this._router.navigateByUrl("/home");
    } else {
      console.log("nope");
    }
  }
}
