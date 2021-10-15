import { Injectable } from '@angular/core';
import { Referencia } from '../shared/Referencia';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(refe: Referencia) {
    return this.bookingListRef.push({
      titulopub: refe.titulopub,
      autores: refe.autores,
      tipopub: refe.tipopub,
      eventorevista: refe.eventorevista,
      doi: refe.doi,
      anyopub: refe.anyopub
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/referencia/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/referencia');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, refe: Referencia) {
    return this.bookingRef.update({
      titulopub: refe.titulopub,
      autores: refe.autores,
      tipopub: refe.tipopub,
      eventorevista: refe.eventorevista,
      doi: refe.doi,
      anyopub: refe.anyopub,
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/referencia/' + id);
    this.bookingRef.remove();
  }
}
