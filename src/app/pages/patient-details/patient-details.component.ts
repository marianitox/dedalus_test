import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AclPatientService } from 'src/app/shared/services/acl-patient.service';

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
    private aclPatientsService: AclPatientService,
  ) {}

  async ngOnInit() {
    this.patientId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.aclPatientsService.getAclPatientDetails(this.patientId).subscribe(
      patient => {
        this.patient = patient
      },
      error => console.error("Error fetching patient detalis" + error)
    )
  }

  returnToList() {
   this.router.navigate(['/'])
  }
}
