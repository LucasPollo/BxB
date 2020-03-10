import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  isSmallSubject = new BehaviorSubject( true );

  isSmallState: boolean = true;

  constructor( private breakpointObserver: BreakpointObserver ) { 

    this.breakpointObserver
    .observe(['(min-width: 992px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('Large!');

        this.isSmallState = false;
      } else {
        console.log('smaller!');

        this.isSmallState = true;
      }

      this.refresh();
    });
  }

  refresh() {

    this.isSmallSubject.next( this.isSmallState );
  }

  isSmall() {

    return this.isSmallSubject.asObservable();
  }
}
