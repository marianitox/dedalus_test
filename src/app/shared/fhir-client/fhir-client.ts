import { Injectable } from "@angular/core";
import Client from 'fhir-kit-client'
import { fhirBaseUrl } from "../constants";

@Injectable({
  providedIn: 'root'
})
export class FhirClient {

  getFhirClient() {
    return new Client({ baseUrl: fhirBaseUrl })
  }
}