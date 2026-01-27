import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetailPasienPageRoutingModule } from './detail-pasien-routing.module';
import { DetailPasienPage } from './detail-pasien.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPasienPageRoutingModule
  ],
  declarations: [DetailPasienPage]
})
export class DetailPasienPageModule {}
