import { Component } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-tab7',
  templateUrl: 'tab7.page.html',
  styleUrls: ['tab7.page.scss'],
  standalone: false,
})
export class Tab7Page {

  constructor(private functionService: FunctionsService) {}

  back() {
    this.functionService.back();
  }

}