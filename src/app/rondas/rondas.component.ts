import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UniversalvariablesService, Comp } from '../universalvariables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rondas',
  templateUrl: './rondas.component.html',
  styleUrls: ['./rondas.component.css']
})
export class RondasComponent implements OnInit {
  private subscriptions = new Subscription();
  id: number;
  a: number;
  constructor(private route: ActivatedRoute, public uv: UniversalvariablesService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.uv.titulo = "Torneo Robótica - Ronda " + this.id;
  }

  ngOnInit() {
    this.subscriptions.add(this.uv.comp.subscribe(data => {
      data.subscribe(data2 => {
        this.dataSource = new MatTableDataSource(data2);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'eq': return item.eq;
            case 'h': return item.r[this.id - 1].h
            case 'b': return item.r[this.id - 1].b
            case 'r': return item.r[this.id - 1].p.r
            case 'f': return item.r[this.id - 1].p.t
            case 't': return item.r[this.id - 1].time.t
            default: return item[property];
          }
        };
      })
    }));

  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  displayedColumns = ['eq', 'h', 'b', 'r', 't', 'f', 'v'];
  dataSource: MatTableDataSource<Comp>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
