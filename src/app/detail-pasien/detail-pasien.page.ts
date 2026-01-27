import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-pasien',
  templateUrl: './detail-pasien.page.html',
  styleUrls: ['./detail-pasien.page.scss'],
  standalone: false,
})
export class DetailPasienPage {

  pasien: any;

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    this.pasien = history.state?.pasien;

    // JIKA TIDAK ADA DATA → BALIK
    if (!this.pasien) {
      this.navCtrl.navigateBack('/tabs/tab3');
    }
  }
}
