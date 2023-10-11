import { Component } from '@angular/core';
import { menuAnimation, navbarAnimation } from './main.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [menuAnimation, navbarAnimation]
})
export class MainComponent {

  openMenu = false;

  toogleOpenMenu() {
    this.openMenu = !this.openMenu;
  }

}
