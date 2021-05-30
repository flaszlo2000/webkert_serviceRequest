import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';



@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class SubjectsModule { }
