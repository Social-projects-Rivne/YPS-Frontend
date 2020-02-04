import { SchoolRequestCardComponent } from './School Requests/school-request-card/school-request-card.component';
import { MatCardModule } from '@angular/material/card';
import { SchoolRequestsComponent } from './School Requests/school-requests/school-requests.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import {MatButton, MatButtonModule, MatIconModule, MatCard} from "@angular/material"
import { SharingModule } from '../sharing/sharing.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolRequestService } from 'src/app/services/school-request.service';

@NgModule({
  declarations: [
    AdminPanelComponent, 
    AdminInfoComponent, 
    AdminNavbarComponent, SchoolRequestsComponent, SchoolsComponent,SchoolRequestCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    SharingModule,
    AdminRoutingModule,
    MatCardModule
  ],
  exports: [
    AdminPanelComponent,
    AdminInfoComponent,
    AdminNavbarComponent,
    SchoolRequestsComponent,
    SchoolsComponent
   
  ],
  // schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminCabinetModule { }
