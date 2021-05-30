import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceRequest } from '../../models/fhir/ServiceRequest.model';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-add-line-dialog',
  templateUrl: './add-line-dialog.component.html',
  styleUrls: ['./add-line-dialog.component.scss']
})
export class AddLineDialogComponent implements OnInit {
  form_group: FormGroup = new FormGroup({
    category: new FormControl('', [Validators.minLength(2), Validators.required]),
    intent: new FormControl('', [Validators.minLength(2), Validators.required]),
    patientInstruction: new FormControl('', [Validators.minLength(2), Validators.required]),
    priority: new FormControl('', [Validators.minLength(2), Validators.required]),
    status: new FormControl('', [Validators.minLength(2), Validators.required]),
    subject: new FormControl('', [Validators.minLength(2), Validators.required]),
  });


  constructor(public dialogRef: MatDialogRef<any>, private firebase_service: FirebaseService) { }

  ngOnInit(): void {
  }

  addLine(): void {
    let data: ServiceRequest = {
      "category": this.form_group.value.category,
      "intent": this.form_group.value.intent,
      "patientInstruction": this.form_group.value.patientInstruction,
      "priority": this.form_group.value.priority,
      "status": this.form_group.value.status,
      "subject": this.form_group.value.subject
    }
    this.firebase_service.add(data);
    this.dialogRef.close();
  }
}
