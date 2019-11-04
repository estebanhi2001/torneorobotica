import { Component, OnInit, Input } from '@angular/core';
import { UniversalvariablesService, Comp } from '../universalvariables.service';

@Component({
  selector: 'app-equipodetalle',
  templateUrl: './equipodetalle.component.html',
  styleUrls: ['./equipodetalle.component.css']
})
export class EquipodetalleComponent {

  
  @Input() public eq: Comp;
  constructor(public uv: UniversalvariablesService) { }
  

}
