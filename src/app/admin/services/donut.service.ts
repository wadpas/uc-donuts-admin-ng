import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of, tap } from 'rxjs';

import { Donut } from '../models/donut.model';


@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [];

  constructor(private http: HttpClient) { }

  read() {
    if (this.donuts.length) {
      return of(this.donuts);
    }
    return this.http
      .get<Donut[]>(`/api/donuts`)
      .pipe(tap((donuts) => this.donuts = donuts));
  }

  readOne(id: string) {
    return this.read().pipe(
      map((donuts) => {
        const donat = donuts.find((donut: Donut) => donut.id === id);
        if (donat) {
          return donat
        }
        return { name: "", icon: "", price: 0, description: "" };
      })
    )
  }

  crete(payload: Donut) {
    return this.http
      .post<Donut>(`/api/donuts`, payload)
      .pipe(
        tap((donut) => {
          this.donuts = [...this.donuts, donut]
        })
      )
  }

  update(payload: Donut) {
    return this.http
      .put<Donut>(`/api/donuts/${payload.id}`, payload)
      .pipe(
        tap((donut) => {
          this.donuts = this.donuts.map((item) => {
            if (item.id === donut.id) {
              return donut;
            }
            return item;
          });
        })
      );
  }

  delete(payload: Donut) {
    return this.http.delete(`/api/donuts/${payload.id}`).
      pipe(
        tap(() => {
          this.donuts = this.donuts.filter((donut) => {
            return donut.id !== payload.id;
          })
        }
        )
      )
  }

}
