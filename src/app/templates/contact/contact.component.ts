import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  whoes: Array<string> = ["Actor", "Voice Artist", "Speaker", "Comediante"]
  constructor() { }

  ngOnInit(): void {
    
    this.contactForm = new FormGroup({
      name: new FormControl(null,[
        Validators.required
      ]),
      who: new FormControl(null,[
        Validators.required
      ]),
      email: new FormControl(null,[
        Validators.required,
        Validators.email,
      ]),
      content: new FormControl(null,[
        Validators.required
      ])
    });
  }

}
