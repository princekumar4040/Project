import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router , CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(public auth: AuthService, public route: Router){}

   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
       return true;
    } else {

    // navigate to login page
     this.route.navigate(['/']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
    }
   }
}
