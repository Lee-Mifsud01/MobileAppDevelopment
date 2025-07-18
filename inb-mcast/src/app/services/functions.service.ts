import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  daysLeft: number = 0;
  nextStipendDaysLeft: number = 0;
  targetDate: Date = new Date('2025-05-28');

  stipendDates: Date[] = [
    new Date('2025-06-17'),
    new Date('2025-07-15'),
    new Date('2025-08-12')
  ];

  nextStipendDate: Date | null = null;

  isDarkMode: boolean = false;
  logoUrl: string = '';

  constructor(private navigation: NavController) { 
    this.loadDarkMode();
    this.calculateDaysLeft();
    this.calculateNextStipendDaysLeft();
  }

  back(){
    this.navigation.back();
  }

  calculateDaysLeft() {
    const today = new Date();
    const diff = this.targetDate.getTime() - today.getTime();
    this.daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  calculateNextStipendDaysLeft() {
    const today = new Date();
    const futureStipend = this.stipendDates.find(date => date > today);
    
    if (futureStipend) {
      this.nextStipendDate = futureStipend;
      const diff = futureStipend.getTime() - today.getTime();
      this.nextStipendDaysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    } else {
      this.nextStipendDate = null;
      this.nextStipendDaysLeft = 0;
    }
  }

  loadDarkMode() {
    const darkModeSetting = localStorage.getItem('dark-mode') === 'true';
    this.isDarkMode = darkModeSetting;

    if (this.isDarkMode) {
      document.body.classList.add('dark');
      this.logoUrl = 'assets/images/logoDarkMode.png';
    } else {
      document.body.classList.remove('dark');
      this.logoUrl = 'assets/images/Logo2.png';
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark');
      this.logoUrl = '/assets/images/logoDarkMode.png';
    } else {
      document.body.classList.remove('dark');
      this.logoUrl = '/assets/images/Logo2.png';
    }

    localStorage.setItem('dark-mode', this.isDarkMode.toString());
  }
}
