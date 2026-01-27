import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPasienPage } from './detail-pasien.page';

const routes: Routes = [
  {
    path: ':id',   // ← WAJIB ADA ID
    component: DetailPasienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPasienPageRoutingModule {}
