import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  

  constructor(private appservice: AppService,
              private router: Router){}

  ngOnInit(): void {
    if(!this.appservice.authenticated){
      this.router.navigateByUrl('/login');
    }
    else{
      this.router.navigateByUrl('/home');
    }
  }
}
