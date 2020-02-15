import { Injectable } from '@angular/core';
import { get, remove } from 'js-cookie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  role: string;
  constructor(private router: Router) { }

  logout(): void {
    this.role = null;
    this.redirectUrl = null;
    let token = get('token');
    let role = get('role');
    if (!!token) {
      remove('token');
    }
    if (!!role) {
      remove('role');
    }
    this.router.navigate(["/"]);
  }
  hasAdminRole(): boolean {
    if (this.getUserRole() === 'admin') {
      return true;
    }
    return false;
  }
  hasMasterRole(): boolean {
    if (this.getUserRole() === 'master') {
      return true;
    }
    return false;
  }
  hasHeadMasterRole(): boolean {
    if (this.getUserRole() === 'head-master') {
      return true;
    }
    return false;
  }
  hasTeacherRole(): boolean {
    if (this.getUserRole() === 'teacher') {
      return true;
    }
    return false;
  }
  hasStudentRole(): boolean {
    if (this.getUserRole() === 'pupil') {
      return true;
    }
    return false;
  }
  hasParentRole(): boolean {
    if (this.getUserRole() === 'parent') {
      return true;
    }
    return false;
  }
  hasHeadAssistantRole(): boolean {
    if (this.getUserRole() === 'head-assistant') {
      return true;
    }
    return false;
  }
  private getUserRole(): string {
    let role = get('role');
    if (!!role) {
      return role;
    }
  }
}