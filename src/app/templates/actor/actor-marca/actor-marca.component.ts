import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { faImdb, faWikipediaW } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-actor-marca",
  templateUrl: "./actor-marca.component.html",
  styleUrls: ["./actor-marca.component.scss"],
})
export class ActorMarcaComponent implements OnInit {
  faImdb = faImdb;
  faWikipediaW = faWikipediaW;
  trayectoriaPath: string = "assets/actor/marca/trayectoria/";
  photos: Array<string> = [
    "poster serie la esquina del diablo.jpg",
    "Pambel_Serie_de_TV-704901649-large.jpg",
    "1.jpg",
    "comandante.jpg",
    "sala de urgencias.jpg",
    "paraiso.jpg",
  ];
  tests: Array<any> = [
    {
      name: "Alejandro Currea, Zoom Producciones",
      text:
        "“Fran es un profesional de altísimo compromiso con cada una de sus interpretaciones. Dentro de sus habilidades, es fácil resaltar su gran manejo corporal como un sello personal, algo que se vuelve toda una marca registrada”.",
    },

    {
      name: "Leonardo Salgado, Creativo (Wunderman Thompson)",
      text:
        "“Pocas personas pueden sacarle humor a la vida como Franartur, sus posibilidades de creación son infinitas. Fue una gran experiencia trabajar con él”.",
    },
    {
      name: "Andrés Lopez, Comediante.",
      text:
        "“Franartur es un muchacho alentado, de buena alimentación y resistencia física, es muy sospechoso que cuando aparece Supermán surcando los cielos él no esté entre nosotros trabajando en el Daily Planet. Franartur es auténtico”.",
    },
    {
      name: "Kiran Fernándes, Director.",
      text:
        "“Trabajar con Fran fue ver comprensión, entusiasmo, creatividad, humor y versatilidad. ¡Es tener un amigo!”.",
    },
    {
      name: "Andrés Lopez, comediante.",
      text:
        "“Franartur es un muchacho alentado, de buena alimentación y resistencia física, es muy sospechoso que cuando aparece Supermán surcando los cielos él no esté entre nosotros trabajando en el Daily Planet. Franartur es auténtico”.",
    },
    {
      name: "Alejandro Ranchez, Director",
      text:
        "“Franartur es un actor propositivo y enérgico. Siempre es pieza clave en el desarrollo de las ideas; su disposición y entrega en el set siempre es la mejor. ¡Increíble talento y profesionalismo!”.",
    },
    {
      name: "Juan Cárdenas. Publicista.",
      text:
        "“Fran es un tremendo profesional de la actuación y la comedia. Su personalidad irradia arte todo el tiempo; tuve la oportunidad de crear un proyecto a su lado, y además de aportar su gran talento, fue demasiado fácil interactuar y trabajar con él.”",
    },
    {
      name: "Bill Gates",
      text: "“Yo era un tipo normal hasta que conocí a Franártur Duque”.",
    },
  ];
  configClients: SwiperConfigInterface = {
    autoHeight: true, //enable auto height
    a11y: true,
    direction: "horizontal",
    slidesPerView: 2,
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
  clients: Array<any> = [
    {
      name: "BBVA",
      url: "",
    },
    {
      name: "Smart Fit",
      url: "",
    },
    {
      name: "Poker",
      url: "",
    },
    {
      name: "Blancox",
      url: "",
    },
    {
      name: "Burger King",
      url: "",
    },
    {
      name: "Movistar",
      url: "",
    },
    {
      name: "Trident",
      url: "",
    },
    {
      name: "Zoom Producciones",
      url: "",
    },
    {
      name: "DDB",
      url: "",
    },
    {
      name: "Los Notarios",
      url: "",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  descargarCV() {
    window.open("/assets/3 Descargar CV.pdf", "_blank");
  }
}
