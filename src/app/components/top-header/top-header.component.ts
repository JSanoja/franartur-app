import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter ,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material';
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  languageSelect :FormControl = new FormControl('es');
  constructor() { }

  ngOnInit(): void {
    this.languageSelect.valueChanges.subscribe(()=> {   
      
    })
  }

}
