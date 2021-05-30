import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';



@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class HistoryModule { }
