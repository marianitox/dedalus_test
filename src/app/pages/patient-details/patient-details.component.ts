import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patientId: string = '';
  patient: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
  ) {}

  async ngOnInit() {
    this.patientId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.patient = await this.patientService.getPatientDetail(this.patientId)
    console.log(this.patient)
  }

  returnToList() {
   this.router.navigate(['/'])
  }
}
