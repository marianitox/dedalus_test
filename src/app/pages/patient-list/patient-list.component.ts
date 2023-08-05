import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient.model';
import { AclPatientService } from 'src/app/shared/services/acl-patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'birthDate', 'gender'];
  patients: Patient[] = [];

  constructor(
    private router: Router,
    private aclPatientService: AclPatientService,
  ) {}

  async ngOnInit() {
    this.aclPatientService.getAclPatients().subscribe(
      patients => {
        this.patients = patients
      },
      error => {
        console.error("Error on fetching all patients" + error)
      }
    )
  }

  getPatientDetails(id: string) {
    this.router.navigate(['/detail', id]);
  }
}
