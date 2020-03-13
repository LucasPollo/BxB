import { Component, OnInit, Renderer2 } from '@angular/core';

import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

import { ParticlesConfig } from 'src/assets/js/particles-config';
import { MenuService } from 'src/app/services/menu.service';


declare var particlesJS: any;

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  constructor( private renderer: Renderer2, public _menu: MenuService) { }

  ngOnInit() {
    this.invokeParticles();


  }


  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }



  paquete1(form?: NgForm){
    Swal.fire({
      title: 'Contratar servicio via WhatsApp',
      icon: 'info',
      text: '¿Deseas enviar un mensaje al numero +542235216323 para adquirir este paquete?',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      cancelButtonText:
      'En otro momento',
      cancelButtonAriaLabel: 'Thumbs down',
      confirmButtonText:
      '<a class="text-white" href="https://api.whatsapp.com/send?phone=+542235216323&text=Hola!%0d%0aMe+gustaria+adquirir+el+paquete+landing+page+que+ustedes+ofrecen!">Me encantaría!</a>',
      confirmButtonAriaLabel: 'Thumbs up, great!'
    });
  }

  
  paquete2(form?: NgForm){
    Swal.fire({
      title: 'Contratar servicio via WhatsApp',
      icon: 'info',
      text: '¿Deseas enviar un mensaje al numero +542235216323 para adquirir este paquete?',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      cancelButtonText:
      'En otro momento',
      cancelButtonAriaLabel: 'Thumbs down',
      confirmButtonText:
      '<a class="text-white" href="https://api.whatsapp.com/send?phone=+542235216323&text=Hola!%0d%0aMe+gustaria+adquirir+el+paquete+personal+web+que+ustedes+ofrecen!">Me encantaría!</a>',
      confirmButtonAriaLabel: 'Thumbs up, great!'
    });
  }


  paquete3(form?: NgForm){
    Swal.fire({
      title: 'Contratar servicio via WhatsApp',
      icon: 'info',
      text: '¿Deseas enviar un mensaje al numero +542235216323 para adquirir este paquete?',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      cancelButtonText:
      'En otro momento',
      cancelButtonAriaLabel: 'Thumbs down',
      confirmButtonText:
      '<a class="text-white" href="https://api.whatsapp.com/send?phone=+542235216323&text=Hola!%0d%0aMe+gustaria+adquirir+el+paquete+eCommerce+que+ustedes+ofrecen!">Me encantaría!</a>',
      confirmButtonAriaLabel: 'Thumbs up, great!'
    });
  }


  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
}

}
