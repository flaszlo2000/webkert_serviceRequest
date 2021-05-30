import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceRequest } from 'src/app/shared/models/fhir/ServiceRequest.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['category', 'intent', 'patientInstruction', 'priority', 'status', 'subject'];
  dataSource: Observable<ServiceRequest[]>;

  constructor(private firebase_service: FirebaseService) {
    this.dataSource = this.firebase_service.getOldRecords();
  }
  ngOnInit(): void {
  }

}
