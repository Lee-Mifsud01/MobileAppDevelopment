import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent] //this will allow it to be used in other modules
})
export class SharedModule { }
