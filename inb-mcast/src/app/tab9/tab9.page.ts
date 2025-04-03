import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab9',
  templateUrl: 'tab9.page.html',
  styleUrls: ['tab9.page.scss'],
  standalone: false,
})
export class Tab9Page {

  constructor(private navCtrl: NavController) {}

  back() {
    this.navCtrl.back();
  }

}