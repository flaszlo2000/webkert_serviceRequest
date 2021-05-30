import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [ErrorDialogComponent]
})
export class ErrorDialogModule { }
