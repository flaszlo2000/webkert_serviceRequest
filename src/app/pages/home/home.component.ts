import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceRequest } from 'src/app/shared/models/fhir/ServiceRequest.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['category', 'intent', 'patientInstruction', 'priority', 'status', 'subject'];
  dataSource: Observable<ServiceRequest[]>;

  constructor(private firebase_service: FirebaseService) {
    this.dataSource = this.firebase_service.getRecords();
  }

  ngOnInit(): void {
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
