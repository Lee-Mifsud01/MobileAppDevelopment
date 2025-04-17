import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service'; // Custom service that handles logic

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent {

  //Shared service to access daysLeft and dark mode toggle
  constructor(public footer: FunctionsService) {}

  /**
   * Toggles dark mode when the icon is clicked.
   * The logic is defined in the shared FunctionsService.
   */
  toggleDarkMode() {
    this.footer.toggleDarkMode();
  }

  calculateDaysLeft() {
    this.footer.calculateDaysLeft();
  }
}
