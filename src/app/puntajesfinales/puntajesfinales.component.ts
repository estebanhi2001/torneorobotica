import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UniversalvariablesService, Comp } from '../universalvariables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-puntajesfinales',
  templateUrl: './puntajesfinales.component.html',
  styleUrls: ['./puntajesfinales.component.css']
})
export class PuntajesFinalesComponent implements OnInit {
  private subscriptions = new Subscription();

  constructor(public uv: UniversalvariablesService) {
    this.uv.titulo = "Torneo Robótica - Desafíos";
  }

  ngOnInit() {
    this.subscriptions.add(this.uv.comp.subscribe(data => {
      data.subscribe(data2 => {
        this.dataSource = new MatTableDataSource(data2);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'r1': return item.r[0].p.t;
            case 'r2': return item.r[1].p.t
            default: return item[property];
          }
        };
      })
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  displayedColumns = ['eq', 'r1', 'dt', 'r2', 'pt', 'v'];
  dataSource: MatTableDataSource<Comp>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

