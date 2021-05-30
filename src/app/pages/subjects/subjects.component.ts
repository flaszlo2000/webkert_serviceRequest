import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceRequest } from 'src/app/shared/models/fhir/ServiceRequest.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subjects: Observable<ServiceRequest[]>;

  constructor(private firebase_service: FirebaseService,) {
    this.subjects = this.firebase_service.getSubjects();
  }

  ngOnInit(): void {
  }

}
