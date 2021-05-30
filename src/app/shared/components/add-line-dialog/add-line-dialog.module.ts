import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLineDialogComponent } from './add-line-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService } from '../../services/firebase.service';


@NgModule({
  declarations: [
    AddLineDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  providers: [FirebaseService],
  exports: [AddLineDialogComponent]
})
export class AddLineDialogModule { }
