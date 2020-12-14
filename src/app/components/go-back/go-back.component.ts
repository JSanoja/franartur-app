import { Component, OnInit } from "@angular/core";
import { ScrollService } from "src/app/services/scroll.service";

@Component({
  selector: "go-back",
  templateUrl: "./go-back.component.html",
  styleUrls: ["./go-back.component.scss"],
})
export class GoBackComponent implements OnInit {
  currentScroll: number = 0;
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.scroll$.subscribe((scroll) => {
      this.currentScroll = scroll;
    });
  }
  goBack() {
    window.history.back();
  }
}
