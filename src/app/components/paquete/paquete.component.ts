import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarinfo(form: NgForm){
    
    // Swal.fire({
    //   title: 'Prueba',
    //   text: 'Demostracion de SweetAlert',
    //   icon: 'info',
    //   allowOutsideClick: false
    // });
    // Swal.showLoading();
    Swal.fire({
      icon: 'info',
      title: 'SweetAlert',
      text: 'Que te parece?'
    })

  }

}
