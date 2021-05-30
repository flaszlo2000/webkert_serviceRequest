import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatDialogModule
  ],
  providers: [FirebaseService],
  exports: [LoginComponent]
})
export class LoginModule { }
