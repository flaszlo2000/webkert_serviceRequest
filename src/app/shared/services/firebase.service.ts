import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ServiceRequest } from '../models/fhir/ServiceRequest.model';
import { CollectionReference, Query } from '@angular/fire/firestore';


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

  getOldRecords(): Observable<ServiceRequest[]> {
    return this.firestore_inst.collection("records", ref  => {
      let query: CollectionReference | Query = ref;
      query = query.where("status", "==", "closed");
      return query;
    }).valueChanges() as Observable<ServiceRequest[]>;
  }

  getSubjects(): Observable<ServiceRequest[]> {
    return this.firestore_inst.collection("records", ref  => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('subject', 'asc');
      return query;
    }).valueChanges() as Observable<ServiceRequest[]>;
  }

  add(data: ServiceRequest): void {
    console.log(data);
    this.firestore_inst.collection("records").add(data);
  }
}
