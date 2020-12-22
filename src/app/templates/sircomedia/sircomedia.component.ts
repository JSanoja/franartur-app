import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";

@Component({
  selector: "app-sircomedia",
  templateUrl: "./sircomedia.component.html",
  styleUrls: ["./sircomedia.component.scss"],
})
export class SircomediaComponent implements OnInit {
  reelPhotosPath: string = "assets/sm-productos/";
  reelPhotos: Array<string> = [
    "zancudo.png",
    "Pechos.png",
    "Mosca.png",
    "Franturbado.png",
    "Franturbado (1).png",
  ];
  configReelPhotos: SwiperConfigInterface = {
    autoHeight: false, //enable auto height
    a11y: true,
    direction: "horizontal",
    slidesPerView: 1.1,
    slideToClickedSlide: true,
    mousewheel: false,
    scrollbar: false,
    watchSlidesProgress: false,
    navigation: false,
    keyboard: false,
    pagination: true,
    centeredSlides: false,
    loop: false,
    roundLengths: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 320px
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
