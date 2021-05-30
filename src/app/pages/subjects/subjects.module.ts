import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    MatCardModule
  ]
})
export class SubjectsModule { }
