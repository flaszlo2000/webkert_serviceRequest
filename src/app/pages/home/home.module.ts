import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { AuthService } from 'src/app/shared/services/auth.service';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    NavbarModule
  ],
  providers: [FirebaseService, AuthService]
})
export class HomeModule { }
