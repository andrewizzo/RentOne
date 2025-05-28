import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  listaVeicoli = [
    {
      name:"Fiat 500 1.2",
      cambio:"Automatica",
      tipoCarburante:"Benzina",
      prezzo:"50€",
      image:"../../../assets/images/fiat-500-bianca-wCustom.png"
    },
    {
      name:"Fiat 500 1.0",
      cambio:"Manuale",
      tipoCarburante:"Benzina",
      prezzo:"40€",
      image:"../../../assets/images/fiat-500-grigia.png"
    },
    {
      name:"Toyota Aygo 1.0",
      cambio:"Automatica",
      tipoCarburante:"Benzina",
      prezzo:"40€",
      image:"../../../assets/images/toyota-aygo.png"
    },
    {
      name:"Audi A3 S-Line",
      cambio:"Automatica",
      tipoCarburante:"Diesel",
      prezzo:"100€",
      image:"../../../assets/images/audi-a3.png"
    },
    {
      name:"Audi Q2",
      cambio:"Automatica",
      tipoCarburante:"Diesel",
      prezzo:"80€",
      image:"../../../assets/images/audi-q2.png"
    },
    {
      name:"Fiat Panda 1.0",
      cambio:"Manuale",
      tipoCarburante:"Hybrid Benzina",
      prezzo:"40€",
      image:"../../../assets/images/panda-bianca-1.0.png"
    },
    {
      name:"Smart ForFour",
      cambio:"Automatica",
      tipoCarburante:"Benzina",
      prezzo:"50€",
      image:"../../../assets/images/panda-bianca-1.0.png"
    },
    {
      name:"Fiat Talento 9 posti",
      cambio:"Manuale",
      tipoCarburante:"Diesel",
      prezzo:"150€",
      image:"../../../assets/images/fiat-talento.png"
    },
    {
      name:"Jeep Renegade 1.6",
      cambio:"Manuale",
      tipoCarburante:"Diesel",
      prezzo:"60€",
      image:"../../../assets/images/jeep-renegade-1.6.png"
    },
    {
      name:"Jeep Renegade 1.6",
      cambio:"Manuale",
      tipoCarburante:"Diesel",
      prezzo:"60€",
      image:"../../../assets/images/jeep-renegade.png"
    },
    {
      name:"Fiat 500x 1.6",
      cambio:"Manuale",
      tipoCarburante:"Diesel",
      prezzo:"60€",
      image:"../../../assets/images/fiat-500x-1.6.png"
    },
    {
      name:"Renault Twingo",
      cambio:"Automatica",
      tipoCarburante:"Elettrica",
      prezzo:"50€",
      image:"../../../assets/images/renault-twingo.png"
    },
    {
      name:"Piaggio Medley 125",
      tipoCarburante:"Benzina",
      prezzo:"35€",
      image:"../../../assets/images/piaggio-medley-125.png"
    },

  ]
}
