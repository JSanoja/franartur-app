import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-comedia",
  templateUrl: "./comedia.component.html",
  styleUrls: ["./comedia.component.scss"],
})
export class ComediaComponent implements OnInit {
  tests: Array<any> = [
    {
      name: "Andrés López, Comediante",
      text:
        "“Franártur es un muchacho alentado, de buena alimentación y resistencia física, es muy sospechoso que cuando aparece Supermán surcando los cielos él no esté entre nosotros trabajando en el Daily Planet. Franártur es auténtico”.",
    },

    {
      name: "Laureano Márquez, Comediante y Politólogo",
      text:
        "“No puedes perder de vista su talento, con su original humor afrodescendiente”.",
    },
    {
      name: "Elías Pino Iturrieta, Historiador.",
      text:
        "“Para humor negro y absurdo, el de Franártur, le recomiendo en estos tiempos de perplejidad”.",
    },

    {
      name: "Luis Chataing, Presentador y Comediante.",
      text:
        "“No se pierdan a Franártur Duque, un comediante del absurdo, entren a su mundo paralelo”.",
    },
    {
      name: "Luis Armando Roche, Cineasta.",
      text:
        "“Franártur es un personaje multifacético muy interesante. Su fuerte es el humor mordaz, extraordinariamente cercano a una realidad absurda , la suya, y a menudo la nuestra. Si quieres reir 'amarillo', como dicen los franceses, este es el ser para ti”. ",
    },
    {
      name: "Bill Gates",
      text: "“Yo era un tipo normal hasta que conocí a Franártur Duque”.",
    },
  ];
  configTest: SwiperConfigInterface = {
    autoHeight: true, //enable auto height
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
  faInstagram = faInstagram;
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
  constructor() {}

  ngOnInit(): void {}
}
