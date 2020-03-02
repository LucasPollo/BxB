import { Component, OnInit } from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  goToElement( elementId ) {

    let element: HTMLElement = document.getElementById( elementId );

    element.scrollIntoView({block: "end", behavior: "smooth"});
  }

}
