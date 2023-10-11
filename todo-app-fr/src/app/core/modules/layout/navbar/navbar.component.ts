import { Component } from '@angular/core';
import { menuAnimation, navbarAnimation } from './navbar.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [navbarAnimation, menuAnimation]
})
export class NavbarComponent {
  isCollapsed = true;

  toggleNavigationMenu(){
    this.isCollapsed = !this.isCollapsed
  }
}
