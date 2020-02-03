import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import {MatButton, MatButtonModule, MatIconModule} from "@angular/material"
import { SharingModule } from '../sharing/sharing.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RequestsComponent } from './requests/requests.component';
import { SchoolsComponent } from './schools/schools.component';

@NgModule({
  declarations: [
    AdminPanelComponent, 
    AdminInfoComponent, 
    AdminNavbarComponent, RequestsComponent, SchoolsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    SharingModule,
    AdminRoutingModule
  ],
  exports: [
    AdminPanelComponent,
    AdminInfoComponent,
    AdminNavbarComponent,
    RequestsComponent,
    SchoolsComponent
   
  ],
  // schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminCabinetModule { }
