import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromLogin from '../auth/login/store/index'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store
  ){};
  currentUser$ = this.store.select(fromLogin.getLoggedUser);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var canActivate = true;
      this.currentUser$.pipe().subscribe(currentUser => {
        if (!currentUser) {
          this.router.navigate(['/login'])
          canActivate = false;
        }
      })
      return canActivate;
  }

}
