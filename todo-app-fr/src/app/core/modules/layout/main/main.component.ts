import { Component } from '@angular/core';
import { menuAnimation, navbarAnimation } from './main.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [menuAnimation, navbarAnimation]
})
export class MainComponent {

  openMenu = false;

  constructor(private readonly router: Router) { }

  get hideNavbar() {
    return !this.router.url.includes('login') && !this.router.url.includes('sign_in');
  }

  toogleOpenMenu() {
    this.openMenu = !this.openMenu;
  }

}
