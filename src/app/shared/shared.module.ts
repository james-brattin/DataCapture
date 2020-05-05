import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotTableModule } from '@handsontable/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  exports: [
    HotTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class SharedModule { }