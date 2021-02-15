import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';

import * as loginUserActions from '../actions/user-login-actions';


@Injectable()
export default class LoginEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  // tslint:disable-next-line: deprecation
  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType(loginUserActions.LOGIN_USER),
    switchMap((data: any) => {
      return from(this.authService.login(data.payload)).pipe(
        map((user) => new loginUserActions.LoginUserSuccess(user)),
        catchError(error => of(new loginUserActions.LoginUserFailed(error)))
      );
    })
  );

  @Effect()
  loginUserSuccess$ = this.actions$.pipe(
    ofType(loginUserActions.LOGIN_USER_SUCCESS),
    switchMap(() => {
      return from(this.authService.getCurrentUser()).pipe(
        map((data) => {
          const user = {
            displayName: data.displayName,
            email: data.email,
            emailVerified: data.emailVerified
          };
          return new loginUserActions.GetCurrentUserSuccess(user);
        }),
        catchError(error => of(new loginUserActions.GetCurrentUserFailed(error)))
      );
    })
  );
}
