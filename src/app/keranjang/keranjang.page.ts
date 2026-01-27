import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone:false,
})
export class KeranjangPage {

  items: any[] = [];

  constructor(
    private cart: CartService,
    private toastCtrl: ToastController
  ) {}

  ionViewWillEnter() { // ← bukan ngOnInit
    this.items = this.cart.getCart();
  }

  hapus(index: number) {
    this.items.splice(index, 1);
    this.cart.updateCart(this.items);
  }

  async checkout() {
    if (this.items.length === 0) {
      const toast = await this.toastCtrl.create({
        message: 'Keranjang masih kosong!',
        duration: 1500,
        color: 'warning'
      });
      toast.present();
      return;
    }

    this.cart.clearCart();
    this.items = [];

    const toast = await this.toastCtrl.create({
      message: 'Checkout berhasil!',
      duration: 1500,
      color: 'success'
    });
    toast.present();
  }
}
