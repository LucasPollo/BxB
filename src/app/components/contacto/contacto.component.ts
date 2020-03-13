import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  height: number;

  constructor( public _menu: MenuService) { }

  ngOnInit() {
    this.height =  window.innerHeight - 85;
  }




}
