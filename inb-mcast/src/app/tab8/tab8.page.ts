import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab8',
  templateUrl: 'tab8.page.html',
  styleUrls: ['tab8.page.scss'],
  standalone: false,
})
export class Tab8Page {

  constructor(private navCtrl: NavController) {}

  back() {
    this.navCtrl.back();
  }

}