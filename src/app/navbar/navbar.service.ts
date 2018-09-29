import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
//import { NavbarComponent } from './navbar.component'
@Injectable({
  providedIn: 'root'
})
export class NavbarService {
public sidenav: MatSidenav;


    public setSidenav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
    }

    public open() {
        return this.sidenav.open();
    }


    public close() {
        return this.sidenav.close();
    }

    public toggle(): void {
    this.sidenav.toggle();
   }

}
