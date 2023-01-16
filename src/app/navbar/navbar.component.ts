import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Input() showSideBar: boolean;
  @Output() showHideSideBarEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(){}
  ngOnInit(){

  }

  showHideSideBar(){
    this.showSideBar =! this.showSideBar;
    this.showHideSideBarEvent.emit(this.showSideBar);
  }

  logOut(){
    
  }
}
