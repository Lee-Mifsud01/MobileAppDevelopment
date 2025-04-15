import { Component} from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-tab12',
  templateUrl: 'tab12.page.html',
  styleUrls: ['tab12.page.scss'],
  standalone: false,
})
export class Tab12Page {

  
  constructor(private functionService: FunctionsService) {}

  back() {
    this.functionService.back();
  }

}