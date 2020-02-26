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
      this.router.navigate(['/cabinet']);
    } else if (this.authService.hasHeadMasterRole()) {
      this.router.navigate(['/cabinet']);
    } else if (this.authService.hasTeacherRole()) {
      this.router.navigate(['/teacher']);
    }
    //Add new redirect after adding new cabinet
    return false;
  }
}