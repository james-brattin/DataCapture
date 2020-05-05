import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataCaptureComponent } from './data-capture.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/data-capture' },
  { path: 'data-capture', component: DataCaptureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCaptureRoutingModule { }
