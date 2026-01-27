import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {

  daftarDokter: any[] = [];

  constructor() {}

  ngOnInit() {
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
      // ================= Tambahan Dokter Baru =================
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

}
