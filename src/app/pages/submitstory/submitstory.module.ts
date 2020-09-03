import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitstoryPageRoutingModule } from './submitstory-routing.module';

import { SubmitstoryPage } from './submitstory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitstoryPageRoutingModule
  ],
  declarations: [SubmitstoryPage]
})
export class SubmitstoryPageModule {}
