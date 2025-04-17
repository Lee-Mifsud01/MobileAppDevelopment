import { Component } from '@angular/core';

@Component({
  selector: 'app-tab8',
  templateUrl: 'tab8.page.html',
  styleUrls: ['tab8.page.scss'],
  standalone: false,
})
export class Tab8Page {

  constructor() {}

  //Added the info for the food
  menu = [
    {
      name: 'Monday',
      soup: 'Soup of Mushroom & Chicken',
      main: 'Chicken Drumsticks with Garlic & Fresh Herbs Potato',
      vegetable: 'Cauliflower Cheese (V)(GF)',
      pasta: 'Sauteed Vegetables & Fresh Herbs'
    },
    {
      name: 'Tuesday',
      soup: 'Lentil & Vegetables (V)(GF)',
      main: 'Cottage Pie',
      vegetable: 'French Beans (V)(GF)',
      pasta: 'Cream Chicken & Spinach (V)(GF)'
    },
    {
      name: 'Wednesday',
      soup: 'Spicy Potato (V)',
      main: 'Grilled Maltese Sausage in Onion Gravy with Mash',
      vegetable: 'Peas & Carrots (V)(GF)',
      pasta: 'Mac & Cheese'
    },
    {
      name: 'Thursday',
      soup: 'Cream of Sweetcorn (GF)',
      main: 'Chicken Thighs Mushroom Sauce Potato Wedges',
      vegetable: 'Mixed Vegetables (V)(GF)',
      pasta: 'Egg Fried Rice & Vegetable'
    }
  ];

  //Date Format function
  getFormattedDate(index: number): string {

    
    const today = new Date();
    const dayOfWeek = today.getDay();

    const monday = new Date(today);
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    monday.setDate(today.getDate() + diffToMonday + index);

    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return monday.toLocaleDateString('en-GB', options);
  }

}
