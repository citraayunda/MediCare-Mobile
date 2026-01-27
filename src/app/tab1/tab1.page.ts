import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}

  fitur = [
    { icon: "person-add-outline", title: "Registrasi Pasien", url: "/tabs/tab2" },
    { icon: "people-outline", title: "Daftar Pasien", url: "/tabs/tab3" },
    { icon: "calendar-outline", title: "Jadwal Pemeriksaan", url: "/tabs/tab4" },
    { icon: "clipboard-outline", title: "Jadwal Kontrol", url: "/tabs/tab5" },
    { icon: "medkit-outline", title: "Apotekku", url: "/tabs/tab6" }
  ];

}
