import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string= ''
  public token;
  constructor( ) { }

  isAuthenticated() {
    this.token = localStorage.getItem('token');
    if(this.token) {
      return this.token;
    }
  }

 


}
