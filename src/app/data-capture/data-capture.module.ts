import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DataCaptureRoutingModule } from './data-capture-routing.module';
import { DataCaptureComponent } from './data-capture.component';


@NgModule({
  declarations: [DataCaptureComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataCaptureRoutingModule
  ]
})
export class DataCaptureModule { }
