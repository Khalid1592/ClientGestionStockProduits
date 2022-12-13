import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientGestionStockProduits';

  showSideBarFromNavBar:boolean = false;
  showHideSideBar(showSideBar:boolean){
    this.showSideBarFromNavBar = showSideBar;
  }

  ngOnInit(): void {
  }
}
