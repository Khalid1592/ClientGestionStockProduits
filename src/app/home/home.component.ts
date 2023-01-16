import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'ClientGestionStockProduits';

  showSideBarFromNavBar:boolean = false;

  showHideSideBar(showSideBar:boolean){
    this.showSideBarFromNavBar = showSideBar;
  }

}
