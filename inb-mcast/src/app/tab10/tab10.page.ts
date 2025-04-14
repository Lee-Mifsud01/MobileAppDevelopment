import { Component } from '@angular/core';
import { FunctionsService } from '../services/functions.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab10',
  templateUrl: 'tab10.page.html',
  styleUrls: ['tab10.page.scss'],
  standalone: false,
})
export class Tab10Page {

  constructor(
    private functionService: FunctionsService,
    private alertController: AlertController
  ) {}

  back() {
    this.functionService.back();
  }

  async openServiceInfo(service: string) {
    let header = '';
    let message = '';

    switch(service) {
      case 'therapy':
        header = 'Therapy Services';
        message =
          'Professional therapy services to support your mental health and well-being.\n\n' +
          'Phone: +356 2398 7188 \n' +
          'Email: counsellors@mcast.edu.mt';
        break;

      case 'addiction':
        header = 'Addiction Help';
        message =
          'Resources and counseling for addiction recovery and support.\n\n' +
          'Phone: +356 2398 7188\n' +
          'Email: substanceissues@mcast.edu.mt';
        break;

      case 'mental-health':
        header = 'Mental Health Support';
        message =
          'Talk to professionals about anxiety, stress, or other mental health concerns.\n\n' +
          'Phone: +356 2398 7188 \n' +
          'Email: counsellors@mcast.edu.mt';
        break;

      case 'nutrition':
        header = 'Nutritional Advice';
        message =
          'Get advice from qualified nutritionists for a healthier lifestyle.\n\n' +
          'Phone: +356 2398 7188 \n' +
          'Email: nutrition@mcast.edu.mt';
        break;
    }

    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Close'],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }
}
