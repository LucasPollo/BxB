import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
// import { Element } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  scrollOn: boolean = false;

  menu: any = [];

  constructor( private _menu: MenuService ) { }


  ngOnInit() {

    window.onscroll = ( event: any) => {

      this.scrollOn = event.srcElement.documentElement.scrollTop > 10 ? true : false;

      console.log(this.scrollOn);
      

    }


    this._menu.getMenu()
      .subscribe ( menu => {
        this.menu = menu;

        console.log(menu);
        
      } );    
  }


  goToElement( elementId ) {

    let element: HTMLElement = document.getElementById( elementId );

    element.scrollIntoView({block: "start", behavior: "smooth"});
  }

}
