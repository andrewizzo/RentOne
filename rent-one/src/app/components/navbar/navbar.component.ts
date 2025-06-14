import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  numero = '+393338201637';
  chiamaNumero(){
    window.location.href = `tel:${this.numero}`
  }
}
