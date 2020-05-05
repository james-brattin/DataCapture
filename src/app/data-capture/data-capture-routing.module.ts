import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataCaptureComponent } from './data-capture.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/project-template' },
  { path: 'project-templates', component: DataCaptureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCaptureRoutingModule { }
