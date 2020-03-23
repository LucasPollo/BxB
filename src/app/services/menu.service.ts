import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  
  private menu = [

    {
      id: 1,
      description: 'Inicio',
      targetId: 'header',
      isActive: true
    },
    {
      id: 2,
      description: 'Productos',
      targetId: 'paquete',
      isActive: false
    },
    {
      id: 3,
      description: 'Quiénes somos',
      targetId: 'aboutus',
      isActive: false
    },
    {
      id: 4,
      description: 'Contactanos',
      targetId: 'contacto',
      isActive: false
    },
  ];

  menuSubject = new BehaviorSubject( this.menu );

  constructor() { }


  setActive( id: number, { target, visible }: { target: Element; visible: boolean} ) {

    if ( visible ) {

      this.menu.forEach( item => item.isActive = false );
  
      this.menu[ id - 1].isActive = true;
  
      this.menuSubject.next( this.menu );
    }

  }

  getMenu() {

    return this.menuSubject.asObservable();
  }


}
