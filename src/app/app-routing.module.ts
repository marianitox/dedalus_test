import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { PAGES } from './shared/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: PAGES.list,
    pathMatch: 'full'
  },
  {
    path: PAGES.list,
    component: PatientListComponent
  },
  {
    path: `${PAGES.detail}/:id`,
    component: PatientDetailsComponent
  },
  {
    path: '**',
    redirectTo: PAGES.list,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
