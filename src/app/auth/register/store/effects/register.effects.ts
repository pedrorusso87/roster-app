import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';
import * as registerActions from '../register-actions';


@Injectable()
export default class RegisterEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  userRegistration$ = createEffect(() => this.actions$.pipe(
    ofType(registerActions.REGISTER_USER),
    switchMap((data: any) => {
      return this.authService.register(data.payload).pipe(
        map((user) => new registerActions.RegisterUserSuccess()),
        catchError(error => of(new registerActions.RegisterUserFailed(error)))
      );
    })
  ));
}
