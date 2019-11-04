import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UniversalvariablesService, Comp } from '../universalvariables.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  private subscriptions = new Subscription();
  id: String;
  eq: Comp;
  constructor(private route: ActivatedRoute, public uv: UniversalvariablesService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.uv.titulo = "Torneo Robótica - " + this.id;
  }


  ngOnInit() {
    this.subscriptions.add(this.uv.comp.subscribe(data => {
      data.subscribe(data2 => {
        this.eq = data2.find(x => x.eq === this.id);
      })
    }));

  }


  now() {
    return Date.now();
  }

}
