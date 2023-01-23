import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Input() showSideBar: boolean;
  @Output() showHideSideBarEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appservice: AppService,
              private router: Router){}
  ngOnInit(){

  }

  showHideSideBar(){
    this.showSideBar =! this.showSideBar;
    this.showHideSideBarEvent.emit(this.showSideBar);
  }

  logOut(){
    //this.appservice.authenticated = false;
    this.router.navigateByUrl('/login');
  }
}
