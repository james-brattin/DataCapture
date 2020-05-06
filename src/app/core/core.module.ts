import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IodpLoginModule } from 'iodplogin';
import { CoreRoutingModule } from './core-routing.module';
import { HotTableModule } from '@handsontable/angular';
import { StartupService } from './services/startup.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [LayoutComponent, SidebarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HotTableModule,
    IodpLoginModule,
    CoreRoutingModule,
  ],
  exports: [RouterModule, FormsModule, ReactiveFormsModule, HotTableModule, LayoutComponent, SidebarComponent],
  providers: [
    StartupService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ]
})
export class CoreModule { }
