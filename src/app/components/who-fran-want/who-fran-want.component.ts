import { Component, OnInit } from "@angular/core";

@Component({
  selector: "who-fran-want",
  templateUrl: "./who-fran-want.component.html",
  styleUrls: ["./who-fran-want.component.scss"],
})
export class WhoFranWantComponent implements OnInit {
  active: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  toggleActive() {
    this.active = !this.active;
  }
}
