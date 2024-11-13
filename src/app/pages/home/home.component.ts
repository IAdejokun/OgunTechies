import { Component } from '@angular/core';
import { BenefitsCardComponent } from '../../components/home/benefits-card/benefits-card.component';
import { CommunityProjectsCardComponent } from '../../components/home/community-projects-card/community-projects-card.component';
import { CommunityMembersComponent } from "../../components/home/community-members/community-members.component";
import { TestimonialCardComponent } from "../../components/home/testimonial-card/testimonial-card.component";
import { BlogCardComponent } from '../../components/home/blog-card/blog-card.component';
import { FaqAccordionComponent } from "../../components/home/faq-accordion/faq-accordion.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BenefitsCardComponent, CommunityProjectsCardComponent, CommunityMembersComponent, TestimonialCardComponent, BlogCardComponent, FaqAccordionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
