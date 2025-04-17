import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent {

  constructor(public footer: FunctionsService) {}

  //Calling the functions from the FunctionService
  toggleDarkMode() {
    this.footer.toggleDarkMode();
  }

  calculateDaysLeft(){
    this.footer.calculateDaysLeft();
  }


}

