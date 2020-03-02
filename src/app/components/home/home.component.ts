import { Component, OnInit, Renderer2 } from '@angular/core';

import Typed from 'typed.js';


import * as  particlesJS from 'particles.js';

import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';
import { ParticlesConfig } from 'src/assets/js/particles-config';





declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public renderer: Renderer2) { }

  ngOnInit() {

    setTimeout(() => {
      this.cargarTyped();
      this.invokeParticles();
    }, 1500);



  }


  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }




  cargarTyped() {

    let typed = new Typed('.typed', {
      strings: [
          '<i class="mascota">Páginas Web</i>',
          '<i class="mascota">Aplicaciones móviles</i>',
          '<i class="mascota">Renovación estética</i>',
          '<i class="mascota">innovación</i>',
      ],
      // stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: '|', // Caracter para el cursor
      contentType: 'html', // 'html' o 'null' para texto sin formato

    });
  }

  mostrarinfo(form: NgForm) {

    Swal.fire({
      icon: 'info',
      title: 'SweetAlert',
      text: 'Que te parece?',
      imageUrl: './assets/img/img5.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image'
    });

  }


  /**
   * Name: FadeIn. Agrega animación cuando el elemento es visible en el viewport
   * @param param0 evento que permite determinar si el elemento es visible o no
   * @param fadeIn animación que se agregará al elemento
   */
  fadeIn({ target, visible }: { target: Element; visible: boolean} , fadeIn:string): void {

    // si es visible y aun no ha agregado la clase de la animacion, se la agrego
    if (visible && (target.className.indexOf(fadeIn) === -1 ) ) {

      target.classList.add(fadeIn);

    }

  }

}


