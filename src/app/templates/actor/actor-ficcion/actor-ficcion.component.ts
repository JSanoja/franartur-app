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
    "poster serie la esquina del diablo.jpg",
    "Pambel_Serie_de_TV-704901649-large.jpg",
    "1.jpg",
    "comandante.jpg",
    "sala de urgencias.jpg",
    "paraiso.jpg",
  ];
  config: SwiperConfigInterface = {
    a11y: true,
    direction: "horizontal",
    slidesPerView: 1,
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
