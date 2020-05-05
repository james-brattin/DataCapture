import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DataCaptureRoutingModule } from './data-capture-routing.module';
import { DataCaptureComponent } from './data-capture.component';
import { PaleoComponent } from './paleo/paleo.component';


@NgModule({
  declarations: [DataCaptureComponent, PaleoComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataCaptureRoutingModule
  ]
})
export class DataCaptureModule { }
