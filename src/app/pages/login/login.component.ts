import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceRequest } from 'src/app/shared/models/fhir/ServiceRequest.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  list: Observable<ServiceRequest[]>;

  constructor(private firebase_service: FirebaseService) {
    this.list = firebase_service.getRecords();
  }

  ngOnInit(): void {
  }

}
