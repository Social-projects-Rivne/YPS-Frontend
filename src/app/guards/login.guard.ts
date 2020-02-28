import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { get } from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkNav(url);;
  }
  checkNav(url: string): boolean {
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    let token = get('token');
    if (!token) { return true; }
    //Redirect to user cabinet authorized user 
    if (this.authService.hasAdminRole()) {
      this.router.navigate(['/admin']);
    } else if (this.authService.hasMasterRole()) {
      this.router.navigate(['/master']);
    } else if (this.authService.hasHeadMasterRole()) {
      this.router.navigate(['/head-master']);
    } else if (this.authService.hasTeacherRole()) {
      this.router.navigate(['/teacher']);
    }else if (this.authService.hasStudentRole()) {
      this.router.navigate(['/pupil']);
    }else if (this.authService.hasParentRole()) {
      this.router.navigate(['/parent']);
    }else if (this.authService.hasHeadAssistantRole()) {
      this.router.navigate(['/head-assistent']);
    }
    
    return false;
  }
}