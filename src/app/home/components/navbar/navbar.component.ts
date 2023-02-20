import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    showAside:string = 'none';
    isMenuActive:boolean = false

    onShowAsideChange(value: string) {
      this.showAside = value;
    }
}
