import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'franartur-app';
  previousUrl: string;
  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1)
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      });
  }
  onActivate(event) {
    window.scroll(0,0);
    document.body.scrollTop = 0;
    document.querySelector('body').scrollTo(0,0)
  
  }
}
