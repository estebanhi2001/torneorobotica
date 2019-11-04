import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UniversalvariablesService {
  titulo: String = "Torneo Robótica"
  loading: boolean = false;
  comp: Observable<Observable<Comp[]>>;
  reglas: DocumentData;

  constructor(public db: AngularFirestore) {
    this.comp = db.doc('reglas/yJINGtQ3KEP2gpytpdbA').get().pipe(
      map(
        reglas => {
          return db.collection<Comp>('competencia', ref => ref.orderBy("a", "desc")).valueChanges({ idField: 'eq' }).pipe(
            map(
              a => {
                a.forEach(function (b) {
                  b.ppe = 1;
                  b.mrh = 0;
                  b.t = 0;
                  b.r.forEach(c => {
                    c.p = {
                      b: reglas.data().puntajebonus * c.b,
                      h: reglas.data().puntajehitos[c.h],
                      r: reglas.data().puntajereinicio * c.r,
                      t: reglas.data().puntajehitos[c.h] + (reglas.data().puntajebonus * c.b) + (reglas.data().puntajereinicio * c.r)
                    }
                    if (b.mrh < c.p.t) {
                      b.mrh = c.p.t
                    }
                    if(c.time.c){
                      c.time.t = c.time.c
                    } else {
                      if ((c.h == (reglas.data().puntajehitos.length - 1)) && (c.time.i && c.time.f)) {

                        if (((c.time.f - c.time.i) / 1000) > 420) {
                          c.time.t = 420
                        } else {
                          c.time.t = (c.time.f - c.time.i) / 1000;
                        }
  
                      } else {
                        c.time.t = 420
                      }
                    }
                    c.p.t = Number((c.p.t + ((420 - c.time.t) / 2)).toFixed(0)); 
                    b.t = b.t + c.p.t;
                    if (c.h == (reglas.data().puntajehitos.length - 1)) {
                      c.hm = false;
                    } else {
                      c.hm = true;
                    }
                  }, this);
                  b.ds = "";
                  b.dt = 5;
                  b.d.forEach(function (i, idx, array) {
                    b.dt = b.dt + ((i * reglas.data().puntajedesafios[idx]) / 100);
                    if (idx === array.length - 1) {
                      b.ds = b.ds + " " + i + "%";
                    } else {
                      b.ds = b.ds + " " + i + "% -";
                    }
                  }, this);
                  b.ren = (b.mrh * 100) / reglas.data().puntajehitos[reglas.data().puntajehitos.length - 1];
                  if (b.dt < b.ren && b.dr) {
                    b.ppe = b.dt / b.ren
                  }
                  b.t = Number((b.t * b.ppe).toFixed(1));
                }, this);
                return a;
              }
            )
          )
        }
      )
    )
  }

  cleanComp(Comp: Comp) {
    delete Comp.dt;
    delete Comp.ds;
    delete Comp.t;
    delete Comp.mrh;
    delete Comp.ppe;
    delete Comp.ren;
    Comp.r.forEach(element => {
      delete element.hm;
      delete element.p;
      delete element.time.t;
    });
    return Comp
  }

  cleanTime(time: Timer) {
    delete time.i
    delete time.f
    delete time.c
  }

  update(eq) {
    var updates = this.cleanComp(eq);
    this.db.doc(`competencia/${eq.eq}`).set(updates)
  }

  now() {
    return Date.now();
  }


}

export interface Comp {
  eq: string;
  a: number;
  es: string;
  ds: string;
  d: number[];
  dt: number;
  r: Ronda[];
  t: number,
  dr: boolean,
  mrh: number,
  ren: number,
  ppe: number,
}

export interface Ronda {
  hm: boolean;
  b: number,
  h: number,
  r: number,
  time: Timer,
  p: {
    b: number,
    h: number,
    r: number,
    t: number
  }
}

export interface Timer {
  i: number,
  f: number,
  t: number,
  c: number
}