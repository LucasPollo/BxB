import { Component, OnInit, Renderer2 } from '@angular/core';

import Typed from 'typed.js';


import * as  particlesJS from 'particles.js';

import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';




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
    }, 1500);


    particlesJS.load('particles-js', 'assets/js/particles.json', function() {
       console.log('callback - particles.js config loaded'); });
  }

  cargarTyped() {
    
    var typed = new Typed('.typed', {
      strings: [
          '<i class="mascota">Páginas Web</i>',
          '<i class="mascota">Aplicaciónes móviles</i>',
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


  fadeInRight({ target, visible }: { target: Element; visible: boolean }): void {

    if (visible)
      target.classList.add('fadeInRight')
    else
      target.classList.remove('fadeInRight');

  }


  fadeInLeft({ target, visible }: { target: Element; visible: boolean }): void {
    //console.log(target);
    // this.renderer.addClass(target, visible ? 'fadeInLeft' : '');
    // this.renderer.removeClass(target, visible ? '' : 'fadeInLeft');
    if (visible)
      target.classList.add('fadeInLeft')
    else
      target.classList.remove('fadeInLeft');    
  }

}


