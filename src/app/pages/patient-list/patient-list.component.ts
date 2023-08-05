import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'birthDate', 'gender'];
  patients: any[] = [];

  constructor(
    private router: Router,
    private patientService: PatientService,
  ) {}

  async ngOnInit() {
    const patientsBundle = await this.patientService.getAllPatients()
    this.patients = patientsBundle.entry
  }

  getPatientDetails(id: string) {
    this.router.navigate(['/detail', id]);
  }
}
