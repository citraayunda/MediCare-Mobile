import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss'],
  standalone:false,
})
export class Tab6Page {

  query = '';
  selectedKategori = 'Semua';

  kategoriList = [
    'Semua', 'Antibiotik', 'Vitamin', 'Anak-anak', 'Dewasa', 'Salep'
  ];

  obatList = [
    {
      nama: 'Paracetamol 500mg',
      kategori: 'Dewasa',
      stok: 20,
      harga: 8000,
      foto: 'assets/images.obat paracetamol.jpg.jpg',
      deskripsi: "Pereda demam dan nyeri ringan",
      komposisi: "Paracetamol 500mg",
      dosis: "3x sehari setelah makan"
    },
    {
      nama: 'Amoxicillin',
      kategori: 'Antibiotik',
      stok: 15,
      harga: 12000,
      foto: 'assets/images.obat amoxicillin.jpg.jpg',
      deskripsi: "Antibiotik untuk infeksi bakteri",
      komposisi: "Amoxicillin 500mg",
      dosis: "2x sehari setelah makan"
    },
    {
      nama: 'Vitamin C 500mg',
      kategori: 'Vitamin',
      stok: 30,
      harga: 15000,
      foto: 'assets/images.vitamin.jpg.jpg',
      deskripsi: "Vitamin untuk menjaga daya tahan tubuh",
      komposisi: "Ascorbic Acid",
      dosis: "1x sehari"
    },
    {
    nama: 'Ibuprofen 400mg',
    kategori: 'Dewasa',
    stok: 18,
    harga: 10000,
    foto: 'assets/images.ibuprofen.jpg.jpg',
    deskripsi: "Obat anti nyeri dan peradangan",
    komposisi: "Ibuprofen 400mg",
    dosis: "2x sehari setelah makan"
  },
  {
    nama: 'Cefixime 200mg',
    kategori: 'Antibiotik',
    stok: 10,
    harga: 32000,
    foto: 'assets/images.cefixime.jpg.jpg',
    deskripsi: "Antibiotik untuk infeksi saluran kemih dan pernapasan",
    komposisi: "Cefixime 200mg",
    dosis: "1x sehari"
  },
  {
    nama: 'Sirup Paracetamol Anak',
    kategori: 'Anak-anak',
    stok: 25,
    harga: 9000,
    foto: 'assets/images.paracetamol anak.jpg.jpg',
    deskripsi: "Pereda demam dan nyeri untuk anak",
    komposisi: "Paracetamol 160mg/5ml",
    dosis: "3x sehari sesuai usia"
  },
  {
    nama: 'Zinc Sirup',
    kategori: 'Anak-anak',
    stok: 28,
    harga: 7000,
    foto: 'assets/images.zinc sirup.jpg.jpg',
    deskripsi: "Membantu mengatasi diare pada anak",
    komposisi: "Zinc Sulfate 20mg",
    dosis: "1x sehari"
  },
  {
    nama: 'Vitamin B Complex',
    kategori: 'Vitamin',
    stok: 22,
    harga: 12000,
    foto: 'assets/images.vitamin B.jpg.jpg',
    deskripsi: "Menambah energi dan menjaga metabolisme tubuh",
    komposisi: "B1, B2, B6, B12",
    dosis: "1x sehari"
  },
  {
    nama: 'Hydrocortisone Cream',
    kategori: 'Salep',
    stok: 12,
    harga: 18000,
    foto: 'assets/images.salep.jpg.jpg',
    deskripsi: "Mengatasi gatal dan iritasi kulit",
    komposisi: "Hydrocortisone 1%",
    dosis: "Oleskan 2x sehari"
  },
  {
    nama: 'Gentamicin Salep',
    kategori: 'Salep',
    stok: 16,
    harga: 16000,
    foto: 'assets/images.gentacimin.jpg.jpg',
    deskripsi: "Antibiotik topikal untuk infeksi kulit",
    komposisi: "Gentamicin sulfate",
    dosis: "Oleskan tipis 2x sehari"
  },
  {
  nama: 'Cetirizine 10mg',
  kategori: 'Dewasa',
  stok: 25,
  harga: 9000,
  foto: 'assets/images.cetirizen.jpg',
  deskripsi: "Obat alergi dan gatal",
  komposisi: "Cetirizine HCl 10mg",
  dosis: "1x sehari malam"
},
{
  nama: 'Azithromycin 500mg',
  kategori: 'Antibiotik',
  stok: 14,
  harga: 35000,
  foto: 'assets/images.Azithromycin.jpg',
  deskripsi: "Antibiotik untuk infeksi pernapasan",
  komposisi: "Azithromycin 500mg",
  dosis: "1x sehari selama 3 hari"
},
{
  nama: 'OBH Anak Sirup',
  kategori: 'Anak-anak',
  stok: 20,
  harga: 12000,
  foto: 'assets/images.OBH Anak.jpg',
  deskripsi: "Mengatasi batuk pada anak",
  komposisi: "Herbal dan madu",
  dosis: "2-3x sehari sesuai usia"
},
{
  nama: 'ORS (Larutan Rehidrasi)',
  kategori: 'Anak-anak',
  stok: 30,
  harga: 5000,
  foto: 'assets/images.ORS.jpg',
  deskripsi: "Mencegah dehidrasi akibat diare",
  komposisi: "Glukosa & elektrolit",
  dosis: "Sesuai anjuran kemasan"
},
{
  nama: 'Vitamin D3 1000 IU',
  kategori: 'Vitamin',
  stok: 18,
  harga: 25000,
  foto: 'assets/images.Vitamin D3.jpg',
  deskripsi: "Menjaga kesehatan tulang dan imunitas",
  komposisi: "Cholecalciferol 1000 IU",
  dosis: "1x sehari"
},
{
  nama: 'Neurobion',
  kategori: 'Vitamin',
  stok: 22,
  harga: 18000,
  foto: 'assets/images.Neurobion.jpg',
  deskripsi: "Vitamin saraf untuk pegal dan kram",
  komposisi: "Vitamin B1, B6, B12",
  dosis: "1 tablet per hari"
},
{
  nama: 'Miconazole Cream',
  kategori: 'Salep',
  stok: 16,
  harga: 17000,
  foto: 'assets/images.Miconazole Cream.jpg',
  deskripsi: "Antijamur untuk infeksi kulit",
  komposisi: "Miconazole nitrate",
  dosis: "Oleskan 2x sehari"
},
{
  nama: 'Betadine Salep',
  kategori: 'Salep',
  stok: 14,
  harga: 12000,
  foto: 'assets/images.Betadine Salep.jpg',
  deskripsi: "Mengobati luka dan mencegah infeksi",
  komposisi: "Povidone-iodine",
  dosis: "Oleskan pada luka 2x sehari"
},
{
  nama: 'Clindamycin 300mg',
  kategori: 'Antibiotik',
  stok: 10,
  harga: 28000,
  foto: 'assets/images.Clindamycin.jpg',
  deskripsi: "Antibiotik untuk jerawat dan infeksi kulit",
  komposisi: "Clindamycin HCl 300mg",
  dosis: "2x sehari setelah makan"
},
{
  nama: 'Antasida DOEN',
  kategori: 'Dewasa',
  stok: 40,
  harga: 6000,
  foto: 'assets/images.Antasida DOEN.jpg',
  deskripsi: "Mengatasi sakit maag dan asam lambung",
  komposisi: "MgOH & AlOH",
  dosis: "3x sehari sebelum makan"
}

  ];

  filteredObat = [...this.obatList];

  // =========================
  // 🛒 CART
  // =========================
  keranjang: any[] = [];
  showCheckout = false;
  totalHarga = 0;

  // URL API (ubah sesuai folder kamu)
  apiCheckout = 'http://localhost/api-klinik/checkout.php';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  // =========================
  // INIT
  // =========================
  ngOnInit() {
    this.loadCart();
    this.filterObat();
  }

  // =========================
  // FILTER
  // =========================
  filterObat() {
    this.filteredObat = this.obatList.filter(o => {
      const cocokNama = o.nama.toLowerCase().includes(this.query.toLowerCase());
      const cocokKategori =
        this.selectedKategori === 'Semua' || o.kategori === this.selectedKategori;
      return cocokNama && cocokKategori;
    });
  }

  pilihKategori(k: string) {
    this.selectedKategori = k;
    this.filterObat();
  }

  // =========================
  // 🛒 CART LOGIC
  // =========================
  tambahKeKeranjang(item: any, event: Event) {
    event.stopPropagation();

    const found = this.keranjang.find(o => o.nama === item.nama);

    if (found) {
      if (found.qty < item.stok) {
        found.qty++;
      }
    } else {
      this.keranjang.push({
        ...item,
        qty: 1
      });
    }

    this.updateCart();
  }

  tambahQty(item: any) {
    if (item.qty < item.stok) {
      item.qty++;
      this.updateCart();
    }
  }

  kurangQty(item: any) {
    item.qty--;
    if (item.qty <= 0) {
      this.keranjang = this.keranjang.filter(o => o !== item);
    }
    this.updateCart();
  }

  hapusItem(item: any) {
    this.keranjang = this.keranjang.filter(o => o !== item);
    this.updateCart();
  }

  hitungTotal() {
    this.totalHarga = this.keranjang.reduce(
      (t, i) => t + i.harga * i.qty,
      0
    );
  }

  // =========================
  // LOCAL STORAGE
  // =========================
  updateCart() {
    this.hitungTotal();
    localStorage.setItem('cart_apotek', JSON.stringify(this.keranjang));
  }

  loadCart() {
    const data = localStorage.getItem('cart_apotek');
    if (data) {
      this.keranjang = JSON.parse(data);
      this.hitungTotal();
    }
  }

  clearCart() {
    this.keranjang = [];
    this.totalHarga = 0;
    localStorage.removeItem('cart_apotek');
  }

  // =========================
  // CHECKOUT (REAL)
  // =========================
  checkout() {
    if (this.keranjang.length === 0) {
      alert('Keranjang masih kosong');
      return;
    }

    const payload = {
      total: this.totalHarga,
      items: this.keranjang
    };

    // 👉 JIKA BELUM PAKAI BACKEND, COMMENT BLOK INI
    this.http.post(this.apiCheckout, payload).subscribe({
      next: () => {
        this.afterCheckout();
      },
      error: () => {
        alert('Gagal checkout');
      }
    });

    // 👉 JIKA MAU MODE OFFLINE SAJA, PAKAI INI
    // this.afterCheckout();
  }

  afterCheckout() {
    // Kurangi stok
    this.keranjang.forEach(cartItem => {
      const obat = this.obatList.find(o => o.nama === cartItem.nama);
      if (obat) {
        obat.stok -= cartItem.qty;
      }
    });

    alert('Checkout berhasil!\nTotal: Rp ' + this.totalHarga);

    this.clearCart();
    this.showCheckout = false;
    this.filterObat();
  }

  // =========================
  // BADGE COUNT
  // =========================
  get jumlahItemCart() {
    return this.keranjang.reduce((t, i) => t + i.qty, 0);
  }
}