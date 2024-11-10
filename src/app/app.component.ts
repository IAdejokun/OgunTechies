import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Event, NavigationEnd, Router } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import { Subscription } from 'rxjs';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  private routerSubscription!: Subscription;  // Added ! here
  title = 'oguntechies';

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          if (window.HSStaticMethods) {
            window.HSStaticMethods.autoInit();
          }
        }, 100);
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}