import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//Importing the HeaderComponent
import { HeaderComponent } from './header/header.component';
//Importing the FooterComponent
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  //The exports are needed for these components to be used in other modules
  exports: [HeaderComponent, FooterComponent] 
})
export class SharedModule { }
