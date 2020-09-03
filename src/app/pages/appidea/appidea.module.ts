import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppideaPageRoutingModule } from './appidea-routing.module';

import { AppideaPage } from './appidea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppideaPageRoutingModule
  ],
  declarations: [AppideaPage]
})
export class AppideaPageModule {}
