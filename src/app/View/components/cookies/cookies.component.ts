import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent {
  activePopup = true;
  exitPopup() {
    this.activePopup = false;
  }
}