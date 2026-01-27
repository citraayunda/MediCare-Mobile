import { Component } from '@angular/core';
import { PasienService } from '../services/pasien.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  daftarPasien: any[] = [];

  constructor(
    private pasienService: PasienService
  ) {}

  ionViewWillEnter() {
    this.loadPasien();
  }

  loadPasien() {
    this.pasienService.getPasienDariDB().subscribe({
      next: (res: any) => {
        this.daftarPasien = res;
        console.log("DATA PASIEN:", res);
      },
      error: (err) => {
        console.error("Gagal memuat data pasien!", err);
      }
    });
  }

  hapusPasien(id: any) {
    if (!confirm("Yakin ingin menghapus pasien ini?")) return;

    this.pasienService.hapusPasien(id).subscribe({
      next: () => {
        alert("Pasien berhasil dihapus.");
        this.loadPasien();
      },
      error: () => {
        alert("Gagal menghapus pasien!");
      }
    });
  }

}
