import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {

  constructor( public _menu: MenuService) { }

  ngOnInit() {
  }

}
