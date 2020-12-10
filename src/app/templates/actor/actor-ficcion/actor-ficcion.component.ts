import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { faImdb, faWikipediaW } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-actor-ficcion",
  templateUrl: "./actor-ficcion.component.html",
  styleUrls: ["./actor-ficcion.component.scss"],
})
export class ActorFiccionComponent implements OnInit {
  faImdb = faImdb;
  faWikipediaW = faWikipediaW;
  trayectoriaPath: string = "assets/actor/ficcion/trayectoria/";
  photos: Array<string> = [
    "Comandate.png",
    "La esquina.png",
    "Pambele.png",
    "Paraiso.png",
    "Quién mató a Patricia.jpg",
    "Sala urgencias.png",
  ];
  reelPhotosPath: string = "assets/Galeria/";
  reelPhotos: Array<string> = [
    "169-01.jpg",
    "169-02.jpg",
    "169-03.jpg",
    "169-04.jpg",
    "169-05.jpg",
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
  configTrayectoria: SwiperConfigInterface = {
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
  config: SwiperConfigInterface = {
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
  descargarCV() {
    window.open("/assets/3 Descargar CV.pdf", "_blank");
  }
}
