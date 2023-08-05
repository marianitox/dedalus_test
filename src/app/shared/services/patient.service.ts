import { Injectable } from "@angular/core";
import { FhirClient } from "../fhir-client/fhir-client";

@Injectable({
  providedIn: 'root'
})
export class PatientService { 

  constructor(
    private fhirClient: FhirClient
  ) {}

  getAllPatients(): Promise<any> {
    return this.fhirClient.getFhirClient().request('Patient')
  }

  getPatientDetail(id: string): Promise<any> {
    const endpoint = `Patient/${id}`;
    return this.fhirClient.getFhirClient().request(endpoint)
  }
}