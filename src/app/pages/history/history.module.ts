import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/shared/services/firebase.service';



@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [FirebaseService]
})
export class HistoryModule { }
