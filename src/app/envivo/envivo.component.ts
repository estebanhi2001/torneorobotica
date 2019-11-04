import { Component, OnInit } from '@angular/core';
import { UniversalvariablesService, Comp } from '../universalvariables.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-envivo',
  templateUrl: './envivo.component.html',
  styleUrls: ['./envivo.component.css']
})
export class EnvivoComponent implements OnInit {
  private subscriptions = new Subscription();
  hola: String = 'gs';
  eq1: Comp;
  eq2: Comp;
  seq1: String = '';
  seq2: String = '';
  options = [];
  eqs: Comp[];
  constructor(public uv: UniversalvariablesService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.subscriptions.add(this.uv.comp.subscribe(data => {
      data.subscribe(data2 => {
        this.options = [];
        data2.forEach(element => {
          this.options.push(element.eq);
        });
        this.eqs = data2
        if (this.seq1 != '') {
          this.eq1 = data2.find(eq => eq.eq === this.seq1)
        }
        if (this.seq2 != '') {
          this.eq2 = data2.find(eq => eq.eq === this.seq2)
        }
      })
    }));

  }

  onChange() {
    if (this.seq1 != '') {
      this.eq1 = this.eqs.find(eq => eq.eq === this.seq1)
    }
    if (this.seq2 != '') {
      this.eq2 = this.eqs.find(eq => eq.eq === this.seq2)
    }
  }

  
}