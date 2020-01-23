import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { $ } from 'protractor';
import { NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ILink } from 'src/app/models/ILink';

@Component({
  selector: 'yps-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SideBarComponent),
      multi: true
    }
  ]
})
export class SideBarComponent implements OnInit {

  @Input() links:ILink[];
  constructor() {}

  ngOnInit() {
  }
}

