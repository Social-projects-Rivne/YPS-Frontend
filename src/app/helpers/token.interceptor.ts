import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import {
  tap,
  catchError,
  switchMap,
  finalize,
  filter,
  take
} from "rxjs/operators";
import { AuthService } from "../services/auth/auth.service";
import { get } from "js-cookie";

import { set } from "js-cookie";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isTokenRefreshing: boolean = false;

  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private acct: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if the user is logging in for the first time
    return next.handle(this.attachTokenToRequest(request)).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log("Success");
        }
      }),
      catchError(
        (err): Observable<any> => {
          if (err instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>err).status) {
              case 401:
                return this.handleHttpResponseError(request, next);
              case 400:
                return throwError(this.handleError);
            }
          } else {
            return throwError(this.handleError);
          }
        }
      )
    );
  }

  // Global error handler method
  private handleError(errorResponse: HttpErrorResponse) {
    let errorMsg: string;
    if (errorResponse.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMsg = "An error occured : " + errorResponse.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
    }
    return throwError(errorMsg);
  }

  // Method to handle http error response
  private handleHttpResponseError(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    // First thing to check if the token is in process of refreshing
    if (!this.isTokenRefreshing) {
      // If the Token Refresheing is not true
      this.isTokenRefreshing = true;
      // Any existing value is set to null
      // Reset here so that the following requests wait until the token comes back from the refresh token API call
      this.tokenSubject.next(null);
      /// call the API to refresh the token
      return this.acct.getNewRefreshToken().pipe(
        switchMap((tokenresponse: any) => {
          if (tokenresponse) {
            this.tokenSubject.next(tokenresponse.token);
            set("token", tokenresponse.token);
            set("refreshToken", tokenresponse.refreshToken);
            return next.handle(this.attachTokenToRequest(request));
          }
          return <any>this.acct.logout();
        }),
        catchError(err => {
          this.acct.logout();
          return this.handleError(err);
        }),
        finalize(() => {
          this.isTokenRefreshing = false;
        })
      );
    } else {
      this.isTokenRefreshing = false;
      return this.tokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.attachTokenToRequest(request));
        })
      );
    }
  }
  private attachTokenToRequest(request: HttpRequest<any>) {
    var token = get("token");

    return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
}
