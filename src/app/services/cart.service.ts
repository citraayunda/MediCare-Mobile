import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  tambah(obat: any) {
    const current = this.cartItems.value;
    current.push(obat);
    this.cartItems.next([...current]); // trigger update
  }

  getCart() {
    return this.cartItems.value;
  }

  updateCart(items: any[]) {
    this.cartItems.next([...items]);
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
