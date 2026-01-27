import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { PasienService } from '../services/pasien.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  formPasien!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private pasienService: PasienService
  ) {
    this.formPasien = this.fb.group({
      nama: ['', Validators.required],
      nik: ['', [Validators.required]],
      tglLahir: ['', Validators.required], // tetap camelCase di form, nanti kita remap
      gender: ['', Validators.required],
      alamat: ['', Validators.required],
      keluhan: ['', Validators.required]
    });
  }

  // fungsi util untuk menampilkan alert
  async alert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // submit form
  async submitForm() {
    if (this.formPasien.invalid) {
      this.alert('Error', 'Mohon lengkapi semua data.');
      return;
    }

    // cegah double submit
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    // tampilkan loading kecil
    const loader = await this.loadingCtrl.create({
      message: 'Menyimpan...',
      spinner: 'crescent'
    });
    await loader.present();

    // format tanggal supaya sesuai format MySQL
let tgl = this.formPasien.value.tglLahir;
if (tgl) {
  tgl = tgl.split('T')[0]; // hasil contoh: 2025-12-04
}

// remap field ke snake_case sesuai API PHP
const payload = {
  nama: this.formPasien.value.nama,
  nik: this.formPasien.value.nik,
  tgl_lahir: tgl,
  gender: this.formPasien.value.gender,
  alamat: this.formPasien.value.alamat,
  keluhan: this.formPasien.value.keluhan
};


    this.pasienService.tambahPasien(payload).subscribe({
      next: async (res: any) => {
        await loader.dismiss();
        this.isSubmitting = false;

        // jika API mengembalikan object dengan status, gunakan itu
        if (res && (res.status === 'success' || res.status === 'ok')) {
          this.alert('Sukses', res.message || 'Data pasien berhasil disimpan!');
          this.formPasien.reset();
        } else {
          // fallback jika server mengembalikan data lain
          this.alert('Sukses', res.message || 'Data pasien berhasil disimpan!');
          this.formPasien.reset();
        }
      },
      error: async (err: any) => {
        await loader.dismiss();
        this.isSubmitting = false;

        console.error('API ERROR:', err);

        // kalau ada pesan error dari backend (HTTP 4xx/5xx), tampilkan
        if (err?.error && typeof err.error === 'object' && err.error.message) {
          this.alert('Gagal', err.error.message);
        } else if (err?.message) {
          this.alert('Gagal', 'Kesalahan: ' + err.message);
        } else {
          this.alert('Gagal', 'Tidak dapat terhubung ke server. Periksa koneksi dan backend.');
        }
      }
    });
  }

}
