import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss'],
  standalone: false,
})
export class Tab6Page {

  constructor(private navCtrl: NavController) {}

  back() {
    this.navCtrl.back();
  }

}