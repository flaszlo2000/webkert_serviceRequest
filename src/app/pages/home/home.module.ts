import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    NavbarModule
  ]
})
export class HomeModule { }
