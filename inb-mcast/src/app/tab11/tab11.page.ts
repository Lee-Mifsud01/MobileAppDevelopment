import { Component } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-tab11',
  templateUrl: 'tab11.page.html',
  styleUrls: ['tab11.page.scss'],
  standalone: false,
})
export class Tab11Page {

  constructor(private functionService: FunctionsService) {}

  back() {
    this.functionService.back();
  }

}