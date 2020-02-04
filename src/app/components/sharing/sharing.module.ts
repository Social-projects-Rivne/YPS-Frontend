import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { SideBarElementComponent } from '../side-bar-element/side-bar-element.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideBarComponent, 
    SideBarElementComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports:[
    SideBarComponent,
    SideBarElementComponent
  ]
})
export class SharingModule { }
