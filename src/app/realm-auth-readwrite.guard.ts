import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as realm from './realm';

@Injectable({
  providedIn: 'root'
})
export class RealmAuthGuardReadWrite implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return realm.getValidAccessTokenReadWrite().then(accessToken => {
      return accessToken ? true : false;
    });
  }
}
