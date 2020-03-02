import { Injectable } from "@angular/core";
import { get, remove, set } from "js-cookie";
import { Router } from "@angular/router";
import { apiUrl } from "src/constants/urls";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { IToken } from "src/app/models/IToken";
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  role: string;
  token: IToken;
  constructor(private http: HttpClient, private router: Router, private userService: UserService) {}
  getNewRefreshToken(): Observable<IToken> {
    let refreshToken = get("refreshToken");
    let token = get("token");
    return this.http
      .post<IToken>(apiUrl + "/RefreshToken", { token, refreshToken })
      .pipe(
        map(result => {
          set("token", result.token);
          set("refreshToken", result.refreshToken);
          return result;
        })
      );
  }
  logout(): void {
    this.role = null;
    this.redirectUrl = null;

    remove("token");
    remove("refreshToken");
    remove("role");

    this.userService.user = null;
    this.router.navigate(["/"]);
  }

  hasAdminRole(): boolean {
    if (this.getUserRole() === "admin") {
      return true;
    }
    return false;
  }
  hasMasterRole(): boolean {
    if (this.getUserRole() === "master") {
      return true;
    }
    return false;
  }
  hasHeadMasterRole(): boolean {
    if (this.getUserRole() === "head-master") {
      return true;
    }
    return false;
  }
  hasTeacherRole(): boolean {
    if (this.getUserRole() === "teacher") {
      return true;
    }
    return false;
  }
  hasStudentRole(): boolean {
    if (this.getUserRole() === "pupil") {
      return true;
    }
    return false;
  }
  hasParentRole(): boolean {
    if (this.getUserRole() === "parent") {
      return true;
    }
    return false;
  }
  hasHeadAssistantRole(): boolean {
    if (this.getUserRole() === "head-assistant") {
      return true;
    }
    return false;
  }
  private getUserRole(): string {
    let role = get("role");
    if (!!role) {
      return role;
    }
  }
}
