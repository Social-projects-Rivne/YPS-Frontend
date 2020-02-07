import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../sidebar/sidebar.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideBarComponent, 
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports:[
    SideBarComponent,
  ]
})
export class SharingModule { }
