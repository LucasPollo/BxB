import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { BreakpointService } from 'src/app/services/breakpoint.service';
// import { Element } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  scrollOn: boolean = false;
  isSmall: boolean = true;

  menu: any = [];

  constructor( private _menu: MenuService,
                private _breackpoint: BreakpointService ) { }


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


    this._breackpoint.isSmall().subscribe( state => this.isSmall = state );
  }


  goToElement( elementId ) {

    let element: HTMLElement = document.getElementById( elementId );

    element.scrollIntoView({block: "start", behavior: "smooth"});
  }

}
