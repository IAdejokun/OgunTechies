import { Component } from '@angular/core';
import { BenefitsCardComponent } from '../../components/home/benefits-card/benefits-card.component';
import { CommunityProjectsCardComponent } from '../../components/home/community-projects-card/community-projects-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BenefitsCardComponent, CommunityProjectsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
