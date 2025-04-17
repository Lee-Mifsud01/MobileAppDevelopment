import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab49',
  templateUrl: 'tab9.page.html',
  styleUrls: ['tab9.page.scss'],
  standalone: false,
})
export class Tab9Page {

  constructor(private alertController: AlertController) {}

  // Array of club details to display in the UI
  clubs = [
    { name: 'Sports Club', icon: 'football-outline', description: 'Stay active and healthy' },
    { name: 'Gaming Club', icon: 'game-controller-outline', description: 'Play. Compete. Connect.' },
    { name: 'Dance Club', icon: 'musical-notes-outline', description: 'Move with the rhythm' },
    { name: 'Photography Club', icon: 'camera-outline', description: 'Capture moments creatively' },
    { name: 'Music Club', icon: 'headset-outline', description: 'Play, sing, vibe together' },
    { name: 'Tech Club', icon: 'hardware-chip-outline', description: 'Innovate & create with tech' },
    { name: 'Drama Club', icon: 'videocam-outline', description: 'Lights, Camera, Action!' },
    { name: 'Literature Club', icon: 'book-outline', description: 'For the love of books' },
    { name: 'Adventure Club', icon: 'compass-outline', description: 'Explore. Hike. Discover.' },
    { name: 'Art Club', icon: 'color-palette-outline', description: 'Unleash your creativity' }
  ];

  // Show an alert form when user clicks "Join Now"
  async openJoinForm(clubName: string) {
    const alert = await this.alertController.create({
      header: `Join ${clubName}`, // dynamic header with club name
      inputs: [
        { name: 'name', type: 'text', placeholder: 'Your Name' },
        { name: 'email', type: 'email', placeholder: 'Your Email' },
        { name: 'studentId', type: 'text', placeholder: 'Student ID' },
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' }, // close dialog without submitting
        {
          text: 'Submit',
          handler: (data) => {
            console.log(`Join request for ${clubName}:`, data); // log user input
            this.showConfirmation(clubName); // log user input
          }
        }
      ],
      cssClass: 'join-alert'
    });

    await alert.present();
  }

  // Show success confirmation alert after form submission
  async showConfirmation(clubName: string) {
    const confirmation = await this.alertController.create({
      header: 'Success!',
      message: `You have requested to join ${clubName}.`,
      buttons: ['OK']
    });

    await confirmation.present();
  }
}