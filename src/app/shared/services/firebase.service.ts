import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ServiceRequest } from '../models/fhir/ServiceRequest.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  records: Observable<ServiceRequest[] | any>;

  constructor(public firestore_inst: AngularFirestore) {
    this.records = this.firestore_inst.collection("records").valueChanges();
  }

  getRecords(): Observable<ServiceRequest[]> {
    return this.records;
  }
}
