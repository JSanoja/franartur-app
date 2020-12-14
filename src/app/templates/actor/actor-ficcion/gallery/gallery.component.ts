import { Component, OnInit } from "@angular/core";
import { ScrollService } from "src/app/services/scroll.service";

@Component({
  selector: "app-af-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class ActorFiccionGalleryComponent implements OnInit {
  constructor() {}
  path: string = "assets/Galeria/";
  images = [
    {
      src: this.path + "169-01.jpg",
      thumb: this.path + "43-01.jpg",
    },
    {
      src: this.path + "169-02.jpg",
      thumb: this.path + "43-02.jpg",
    },
    {
      src: this.path + "169-03.jpg",
      thumb: this.path + "43-03.jpg",
    },
    {
      src: this.path + "169-04.jpg",
      thumb: this.path + "43-04.jpg",
    },
    {
      src: this.path + "169-05.jpg",
      thumb: this.path + "43-05.jpg",
    },
  ];
  ngOnInit() {}
}
