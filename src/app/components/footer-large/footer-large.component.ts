import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedin, faImdb, faWikipediaW } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-large',
  templateUrl: './footer-large.component.html',
  styleUrls: ['./footer-large.component.scss']
})
export class FooterLargeComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faImdb = faImdb;
  faWikipediaW = faWikipediaW;
  constructor() { }

  ngOnInit() {
  }

}
