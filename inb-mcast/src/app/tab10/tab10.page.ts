import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importing Ionic alert service

@Component({
  selector: 'app-tab10',
  templateUrl: 'tab10.page.html',
  styleUrls: ['tab10.page.scss'],
  standalone: false,
})
export class Tab10Page {

  constructor(private alertController: AlertController) {}

  /**
   * Opens an alert with information based on the selected service.
   * Triggered when the user clicks on a service card.
   * @param service - the key name for the type of support selected
   */
  async openServiceInfo(service: string) {
    let header = '';  // Title of the alert
    let message = ''; // Body text of the alert

    // Set the content of the alert based on the service selected
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

    // Create the alert using Ionic's AlertController
    const alert = await this.alertController.create({
      header: header,         // Alert title
      message: message,       // Dynamic alert message based on selection
      buttons: ['Close'],     // Single dismiss button
      cssClass: 'custom-alert' // Custom styling class (defined in SCSS)
    });

    // Show the alert
    await alert.present();
  }
}
