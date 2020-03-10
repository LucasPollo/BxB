import { Component, OnInit } from '@angular/core';
// import { Element } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  scrollOn: boolean = false;

  constructor() { }

  ngOnInit() {

    window.onscroll = ( event: any) => {

      this.scrollOn = event.srcElement.documentElement.scrollTop > 10 ? true : false;

      console.log(this.scrollOn);
      

    }
  }


  goToElement( elementId ) {

    let element: HTMLElement = document.getElementById( elementId );

    element.scrollIntoView({block: "end", behavior: "smooth"});
  }

}
