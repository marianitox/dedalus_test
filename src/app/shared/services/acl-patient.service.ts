import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Patient } from "../models/patient.model";
import { PatientService } from "./patient.service";

@Injectable({
  providedIn: 'root'
})
export class AclPatientService {

  constructor(
    private patientService: PatientService
  ) {}

  getAclPatients(): Observable<Patient[]> {
    return this.patientService.getAllPatients().pipe(
      map(data => {
        return data.entry.map((entry: any) => ({
          id: entry.resource.id || '',
          name: entry.resource.name?.[0].given.join(' ') || '',
          lastName: entry.resource.name?.[0].family || '',
          gender: entry.resource.gender || '',
          birthDate: entry.resource.birthDate || '',
        }));
      })
    )
  }

  getAclPatientDetails(id: string): Observable<Patient> {
    return this.patientService.getPatientDetail(id).pipe(
      map(data => {
        return {
          id: data.id,
          name: data.name?.[0]?.given.join(' '),
          lastName: data.name?.[0]?.family || '',
          gender: data.gender || '',
          birthDate: data.birthDate || '',
          address: data.address?.[0]?.line.join(' ') || '',
          city: data.address?.[0]?.city || '',
          postalCode: data.address?.[0]?.postalCode || '',
          phoneNumber: data.telecom?.[0]?.value || '',
        };
      })
    )
  }
}
