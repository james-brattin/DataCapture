import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataCaptureComponent } from './data-capture.component';
import { PaleoComponent } from './paleo/paleo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/data-capture' },
  { path: 'data-capture', component: DataCaptureComponent },
  { path: 'micropaleo', component: PaleoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCaptureRoutingModule { }
