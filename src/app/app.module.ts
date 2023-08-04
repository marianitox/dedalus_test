import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { TableComponent } from './shared/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientDetailsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
