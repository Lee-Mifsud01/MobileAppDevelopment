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

}