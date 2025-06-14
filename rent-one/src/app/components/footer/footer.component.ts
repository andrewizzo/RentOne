import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  apriWhatsApp(){
    const numero = "+393338201637";
    const messaggio = "Ciao vorrei prenotare un veicolo!"
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(messaggio)}`;
    window.open(url,'_blank');
  }

  scrollToNavbar() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.scrollIntoView({ behavior: 'smooth' });
  }
}
}
