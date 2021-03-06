import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { get, remove } from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'yps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userName: string;
  @Input() schoolName: string;
  @Input() cabinetUrl: string;

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  logout = () => {
    this.authService.logout();
  }
}