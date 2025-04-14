import { Component } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-tab49',
  templateUrl: 'tab9.page.html',
  styleUrls: ['tab9.page.scss'],
  standalone: false,
})
export class Tab9Page {

  constructor(private functionService: FunctionsService) {}

  back() {
    this.functionService.back();
  }
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
  
}