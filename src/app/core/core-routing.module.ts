import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IodpLoginModule, IodpLoginComponent, AuthGuard } from 'iodplogin';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/template-lists/project-template' },
  // { path: 'login', component: IodpLoginComponent },
  {
    path: '',
    loadChildren: () => import('../data-capture/data-capture.module').then(m => m.DataCaptureModule)
    // canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [
    IodpLoginModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }