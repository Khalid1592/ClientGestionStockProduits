import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated: boolean = false;
  
  constructor() { }

  authenticate(credentials:any, callback:any) {
    if(credentials && credentials.username == 'user' && credentials.password == 'password1') {
      this.authenticated = true;
      callback && callback();
    } else {
      this.authenticated = false;
    }
    return '';
  }
}
