import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddLineDialogComponent } from 'src/app/shared/components/add-line-dialog/add-line-dialog.component';
import { ServiceRequest } from 'src/app/shared/models/fhir/ServiceRequest.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  displayedColumns: string[] = ['category', 'intent', 'patientInstruction', 'priority', 'status', 'subject'];
  dataSource: Observable<ServiceRequest[]>;

  constructor(private firebase_service: FirebaseService, private line_dialog: MatDialog) {
    this.dataSource = this.firebase_service.getRecords();
  }

  createLine(): void {
    this.line_dialog.open(AddLineDialogComponent).afterClosed();
  }



  // addColumn() {
  //   const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
  //   this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  // }

  // removeColumn() {
  //   if (this.columnsToDisplay.length) {
  //     this.columnsToDisplay.pop();
  //   }
  // }
}
