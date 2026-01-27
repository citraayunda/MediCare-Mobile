import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasienService {

private apiUrl = 'http://127.0.0.1/api-klinik/';


  constructor(private http: HttpClient) {}

  // TAB 2 – Tambah Pasien
  tambahPasien(dataPasien: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}tambahPasien.php`, dataPasien);
  }

  // TAB 3 – Ambil daftar pasien
  getPasienDariDB(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}pasien.php`
    );
  }

  getSemuaPasien(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}pasien.php`);
}

  // DETAIL PASIEN – Ambil berdasarkan ID
  getPasienById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}getPasienById.php?id=${id}`);
  }

  // TAB 5 – Simpan jadwal kontrol
  simpanKontrol(dataKontrol: any): Observable<any> {
  return this.http.post<any>(
    `${this.apiUrl}simpanKontrol.php`,
    dataKontrol,
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

  getJadwalKontrol(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}getKontrol.php`);
}

  hapusPasien(id: number) {
  return this.http.delete(`${this.apiUrl}hapusPasien.php?id=${id}`);
}
}
