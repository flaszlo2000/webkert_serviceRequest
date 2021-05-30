import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FirebaseService } from 'src/app/shared/services/firebase.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [FirebaseService],
  exports: [LoginComponent]
})
export class LoginModule { }
