import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FormControl } from "@angular/forms";
import { ScrollService } from "src/app/services/scroll.service";
@Component({
  selector: "app-top-header",
  templateUrl: "./top-header.component.html",
  styleUrls: ["./top-header.component.scss"],
})
export class TopHeaderComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  currentScroll: number = 0;
  languageSelect: FormControl = new FormControl("es");
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.languageSelect.valueChanges.subscribe(() => {});
    this.scrollService.scroll$.subscribe((scroll) => {
      this.currentScroll = scroll;
    });
  }
}
