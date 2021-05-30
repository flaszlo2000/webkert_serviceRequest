import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddLineDialogModule } from 'src/app/shared/components/add-line-dialog/add-line-dialog.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    NavbarModule,
    MatButtonModule,
    MatDialogModule,
    AddLineDialogModule
  ],
  providers: [FirebaseService, AuthService]
})
export class HomeModule { }
