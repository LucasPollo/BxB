import { Component, OnInit, Renderer2 } from '@angular/core';

import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

import { ParticlesConfig } from 'src/assets/js/particles-config';


declare var particlesJS: any;

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  constructor( private renderer: Renderer2) { }

  ngOnInit() {
    this.invokeParticles();


  }


  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }



  mostrarinfo(form: NgForm){
    
    Swal.fire({
      icon: 'info',
      title: 'SweetAlert',
      text: 'Que te parece?',
      imageUrl: './assets/img/img5.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image'
    })

  }


  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
}

}
