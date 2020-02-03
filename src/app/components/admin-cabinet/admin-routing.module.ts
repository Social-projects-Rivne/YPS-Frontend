import { SchoolRequestsComponent } from './School Requests/school-requests/school-requests.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'profile', component: AdminInfoComponent },
          // { path: 'request', component: RequestsComponent }
          { path: 'schoolRequest', component: SchoolRequestsComponent },
          
          
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
