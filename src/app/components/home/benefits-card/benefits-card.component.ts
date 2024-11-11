import { Component } from '@angular/core';
import { Benefits } from '../../../interface/home/benefits';

@Component({
  selector: 'app-benefits-card',
  standalone: true,
  imports: [],
  templateUrl: './benefits-card.component.html',
  styleUrl: './benefits-card.component.css'
})
export class BenefitsCardComponent {


  cardDeets: Benefits[]  = [
    {
        imageUrl: 'assets/profile-user.svg',
        imageAlt: 'Card Image',
        title: 'Benefits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      imageUrl: 'assets/profile-user.svg',
      imageAlt: 'Card Image',
      title: 'Benefits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: 'assets/profile-user.svg',
    imageAlt: 'Card Image',
    title: 'Benefits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
  imageUrl: 'assets/profile-user.svg',
  imageAlt: 'Dis',
  title: 'Benefits',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}


  ] 

}
