import { Component, OnInit, ViewChild } from "@angular/core";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "go-to-top",
  templateUrl: "./go-to-top.component.html",
  styleUrls: ["./go-to-top.component.scss"],
})
export class GoToTopComponent implements OnInit {
  @ViewChild("goToTopRef") goToTopRef: MatButton;
  constructor() {}

  ngOnInit(): void {}
  goToTop() {
    this.smoothScroll(this.goToTopRef._elementRef.nativeElement.offsetTop);
  }
  smoothScroll(h) {
    let i = h || 0;
    if (i >= 0) {
      setTimeout(() => {
        window.scrollTo(0, i);
        this.smoothScroll(i - 200);
      }, 1);
    } else {
      window.scrollTo(0, 0);
    }
  }
}
