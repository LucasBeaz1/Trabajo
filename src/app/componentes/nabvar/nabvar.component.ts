import { Component } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent {
titulo: string;
imagen: string;
constructor(){
  this.titulo = "INCUYO";
  this.imagen = "https://th.bing.com/th/id/OIP.FKJ_e6rIIwvVsZW7B-UDnwHaHu?pid=ImgDet&rs=1"
}

}
