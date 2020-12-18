import { Component, OnInit } from "@angular/core";
import { faImdb } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-director",
  templateUrl: "./director.component.html",
  styleUrls: ["./director.component.scss"],
})
export class DirectorComponent implements OnInit {
  faImdb = faImdb;
  constructor() {}

  ngOnInit(): void {}
}
