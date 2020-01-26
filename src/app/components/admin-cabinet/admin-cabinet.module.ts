import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import {MatButton, MatButtonModule, MatIconModule} from "@angular/material"
import { SharingModule } from '../sharing/sharing.module';

@NgModule({
  declarations: [
    AdminPanelComponent, 
    AdminInfoComponent, 
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    SharingModule
  ],
  exports: [
    AdminPanelComponent,
    AdminInfoComponent,
    AdminNavbarComponent
   
  ],
  // schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminCabinetModule { }
