import { Injectable } from '@angular/core';
import { get, remove } from 'js-cookie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  role: string;
  constructor(private router: Router) { }

  logout(): void {
    this.isLoggedIn = false;
    this.role = null;
    this.redirectUrl = null;
    let token = get('token');
    if (!!token) {
      remove('token');
    }
    this.router.navigate(["/"]);
  }
}