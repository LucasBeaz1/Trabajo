import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  titulo: string;
  Propet: string;
  desc: string;

  Alumno: string;
  Profesor: string;

  material: string;

  imagen: string;
  Propet2: string;
  Event: string;
  textEvent: string;

  constructor(){
    this.titulo = "INTERPOLACION";
    this.desc = "es una formam de hacer binding de datos en el template de un componenete.";
    this.Alumno = "Lucas Beaz";
    this.Profesor = "Nicolas Vassallo";
    this.material = '';
    this.Propet = 'PROPERTY BINDING';
    this.imagen = 'https://th.bing.com/th/id/R.b2aa224a5582d715d365d32921e50620?rik=6Mn9n5la2ezkTg&pid=ImgRaw&r=0';
    this.Propet2 = '';
    this.Event = 'EVENT BINDING';
    this.textEvent = "Bienvenidos";
   }


  getMaterial() {
    return this.material = 'Angular';
  }
    cambiarTexto() {
      this.textEvent = 'A la Paguina';
  }
}
