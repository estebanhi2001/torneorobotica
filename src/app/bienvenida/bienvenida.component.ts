import { Component, OnInit } from '@angular/core';
import { UniversalvariablesService } from '../universalvariables.service';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(public uv : UniversalvariablesService) { 
    this.uv.titulo = "Torneo Robótica - Inicio"
   }

  ngOnInit() {
    
  }

}
