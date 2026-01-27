import { Component } from '@angular/core';
import { PasienService } from '../services/pasien.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone:false,
})
export class Tab5Page {

  daftarPasien: any[] = [];
  daftarDokter: any[] = [];
  jadwalDokter: any[] = [];

  kontrol: any = {
    pasienId: '',
    dokter: null,
    jadwal: null,
    tanggal: '',
    catatan: ''
  };

  // Mapping nama hari ke angka (0–6)
  hariMap: any = {
    'Minggu': 0,
    'Senin': 1,
    'Selasa': 2,
    'Rabu': 3,
    'Kamis': 4,
    'Jumat': 5,
    'Sabtu': 6
  };

  constructor(private pasienService: PasienService) {}

  // =============== LOAD DATA PASIEN ===============
  ionViewWillEnter() {
    this.pasienService.getSemuaPasien().subscribe((data) => {
      console.log("HASIL GET PASIEN:", data);
      this.daftarPasien = data;
    });

    this.loadDokter();
  }

  // =============== LOAD SEMUA DOKTER ===============
  loadDokter() {
    this.daftarDokter = [
      {
        nama: 'Dr. Andi Wijaya',
        spesialis: 'Dokter Umum',
        poli: 'Poli Umum - Ruang 01',
        str: 'STR-1029384756',
        jadwal: [
          { hari: 'Senin', jam: '08:00 - 12:00' },
          { hari: 'Rabu',  jam: '13:00 - 16:00' }
        ]
      },
      {
        nama: 'Dr. Sinta Dewi',
        spesialis: 'Spesialis Anak',
        poli: 'Poli Anak - Ruang 03',
        str: 'STR-5647382910',
        jadwal: [
          { hari: 'Selasa', jam: '09:00 - 12:00' },
          { hari: 'Kamis',  jam: '14:00 - 17:00' }
        ]
      },
      {
        nama: 'Dr. Budi Prasetyo',
        spesialis: 'Spesialis Kulit',
        poli: 'Poli Kulit - Ruang 05',
        str: 'STR-9081726354',
        jadwal: [
          { hari: 'Jumat', jam: '08:00 - 11:00' }
        ]
      },
      {
        nama: 'Dr. Rina Kartikasari',
        spesialis: 'Spesialis Gigi',
        poli: 'Poli Gigi - Ruang 07',
        str: 'STR-1122334455',
        jadwal: [
          { hari: 'Senin', jam: '13:00 - 17:00' },
          { hari: 'Kamis', jam: '08:00 - 12:00' }
        ]
      },
      {
        nama: 'Dr. Hasan Fadillah',
        spesialis: 'Spesialis Jantung',
        poli: 'Poli Jantung - Ruang 10',
        str: 'STR-6677889900',
        jadwal: [
          { hari: 'Selasa', jam: '10:00 - 14:00' },
          { hari: 'Jumat',  jam: '09:00 - 13:00' }
        ]
      },
      {
        nama: 'Dr. Maya Lestari',
        spesialis: 'Spesialis Mata',
        poli: 'Poli Mata - Ruang 04',
        str: 'STR-5566778899',
        jadwal: [
          { hari: 'Rabu', jam: '08:00 - 12:00' },
          { hari: 'Sabtu', jam: '09:00 - 12:00' }
        ]
      },
      {
        nama: 'Dr. Teguh Purnama',
        spesialis: 'Spesialis Orthopedi',
        poli: 'Poli Orthopedi - Ruang 08',
        str: 'STR-2233445566',
        jadwal: [
          { hari: 'Kamis', jam: '13:00 - 17:00' }
        ]
      }
    ];
  }

  // =============== KETIKA DOKTER DIPILIH ===============
  pilihDokter() {
    this.jadwalDokter = this.kontrol.dokter ? this.kontrol.dokter.jadwal : [];
    this.kontrol.jadwal = null;
    this.kontrol.tanggal = '';
  }

  // =============== FILTER TANGGAL SESUAI JADWAL DOKTER ===============
  enableTanggalDokter = (dateString: string) => {
    if (!this.kontrol.dokter) return false;

    const date = new Date(dateString);
    const hariKe = date.getDay();

    const hariPraktek = this.kontrol.dokter.jadwal.map((j: any) => this.hariMap[j.hari]);

    return hariPraktek.includes(hariKe);
  };

  // =============== SIMPAN KONTROL ===============
  simpanKontrol() {
    if (!this.kontrol.pasienId) {
      alert('Pilih pasien dulu.');
      return;
    }
    if (!this.kontrol.dokter) {
      alert('Pilih dokter.');
      return;
    }
    if (!this.kontrol.jadwal) {
      alert('Pilih jadwal dokter.');
      return;
    }
    if (!this.kontrol.tanggal) {
      alert('Pilih tanggal kontrol.');
      return;
    }

    let tgl = this.kontrol.tanggal;
    if (tgl.includes('T')) tgl = tgl.split('T')[0];

    const dataKontrol = {
      pasienId: Number(this.kontrol.pasienId),
      tanggal: tgl,
      hari: this.kontrol.jadwal.hari,
      jam: this.kontrol.jadwal.jam,
      dokter: this.kontrol.dokter.nama,
      catatan: this.kontrol.catatan || ''
    };

    console.log("DATA DIKIRIM:", dataKontrol);

    this.pasienService.simpanKontrol(dataKontrol).subscribe({
      next: (res) => {
        console.log("RESPONSE DARI PHP:", res);
        alert("Jadwal kontrol berhasil disimpan!");
      },
      error: (err) => {
        console.error("ERROR SIMPAN KONTROL:", err);
        console.log("RAW RESPONSE:", err.error?.text);
      }
    });
  }
}
