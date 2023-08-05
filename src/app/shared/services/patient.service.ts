import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { fhirBaseUrl } from "../constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService { 

  constructor(
    private http: HttpClient,
  ) {}

  getAllPatients(): Observable<any> {
    const url = `${fhirBaseUrl}/Patient`;
    return this.http.get(url);
  }

  getPatientDetail(id: string): Observable<any> {
    const url = `${fhirBaseUrl}/Patient/${id}`;
    return this.http.get(url);
  }
}