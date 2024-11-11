import { Component } from '@angular/core';
import { CommunityProjects } from '../../../interface/home/community-projects';

@Component({
  selector: 'app-community-projects-card',
  standalone: true,
  imports: [],
  templateUrl: './community-projects-card.component.html',
  styleUrl: './community-projects-card.component.css'
})
export class CommunityProjectsCardComponent {

communityProjectsDeetsRowOne: CommunityProjects[] = [
  {
    imageUrl: 'assets/learninghomepage.png',
    imageAlt: 'Card Image',
    title: 'Community Projects1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#'
  },
  {
    imageUrl: 'assets/learninghomepage.png',
    imageAlt: 'Card Image',
    title: 'Community Projects2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#'
  },
]

  communityProjectsDeetsRowTwo: CommunityProjects[] = [
    {
      imageUrl: 'assets/learninghomepage.png',
      imageAlt: 'Card Image',
      title: 'Community Projects3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '#'
    },
    {
      imageUrl: 'assets/learninghomepage.png',
      imageAlt: 'Card Image',
      title: 'Community Projects4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '#'
    }
  ]
}
