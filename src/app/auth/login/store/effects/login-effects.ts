import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { analytics } from 'firebase';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';

import * as loginUserActions from '../login-actions';

@Injectable()
export default class LoginEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(loginUserActions.LOGIN_USER),
    switchMap((data: any) => {
      return from(this.authService.login(data.payload)).pipe(
        map((response) => {
          // TODO -> Check this behaviour, see how can we fix this !response thingy
          if (!response) {
            return new loginUserActions.LoginUserSuccess(response);
          } else {
            return new loginUserActions.LoginUserFailed(response);
          }
        }),
        catchError(error => of(new loginUserActions.LoginUserFailed(error)))
      );
    })
  ));

  loginUserSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(loginUserActions.LOGIN_USER_SUCCESS),
    switchMap(() => {
      return of(
        {
          type: loginUserActions.GET_CURRENT_USER
        }
      );
    })
  ));

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(loginUserActions.GET_CURRENT_USER),
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
  ));
}
