import { Component, Input } from '@angular/core';
//Importing FunctionService
import { FunctionsService } from '../../services/functions.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {

  //This will allow us to name each page accordingly in each html
  @Input() title: string = '';

  constructor(private functionService: FunctionsService) {}
  
    //Calling the function from the FunctionsService 
    back() {
      this.functionService.back();
    }


}
