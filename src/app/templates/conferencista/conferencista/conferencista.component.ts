import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";

@Component({
  selector: "app-conferencista",
  templateUrl: "./conferencista.component.html",
  styleUrls: ["./conferencista.component.scss"],
})
export class ConferencistaComponent implements OnInit {
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
  tests: Array<any> = [
    {
      name: "Alejandro Rojas",
      text:
        "“La conferencia de Franártur me pegó desde el principio y pude verme reflejado y ver la solución para varios de mis problemas. Gracias por eso”.",
    },
    {
      name: "Dally López, Fundación Proyecto Unión",
      text:
        "“El seminario fue divertido y agradable. Me di cuenta que puede haber muchas maneras de llevar una vida feliz con responsabilidad”.",
    },
    {
      name: "Cristina Poveda",
      text:
        "“Ahora sé la importancia de mantenerse positivo, aún en momentos difíciles. Creer siempre en sí mismo, no rendirse y llegar al final de lo que te propongas”.",
    },
    {
      name: "Argemira Enciso, Fundación Proyecto Unión",
      text:
        "“Aprendí que la felicidad no depende de las circunstancias que estemos viviendo, depende de nosotros mismos, de nuestro interior”.",
    },
    {
      name: "Juan Cárdenas, Publicista.",
      text:
        "“La personalidad de Fran irradia arte todo el tiempo, lo que demuestra su pasión por lo que hace”.",
    },
    {
      name: "Leonardo Salgado, Creativo - Wunderman Thompson",
      text:
        "“Pocas personas pueden sacarle humor a la vida como Franártur, sus posibilidades de creación son infinitas”.",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  descargarBr() {
    window.open(
      "/assets/Conferencias Pechos de Héroe-FD on line.pdf",
      "_blank"
    );
  }
}
