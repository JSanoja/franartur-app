import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
declare var MediaElementPlayer;

@Component({
  selector: "app-voice-artist",
  templateUrl: "./voice-artist.component.html",
  styleUrls: ["./voice-artist.component.scss"],
})
export class VoiceArtistComponent implements OnInit {
  @ViewChildren("audio") audiosRef: QueryList<any>;
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

  audios: Array<any> = [
    {
      title: "INSTITUCIONALES",
      source: "/assets/voice-artist/Reel INSTITUCIONAL - Franártur Duque.mp3",
    },
    {
      title: "CARACTERIZACIONES",
      source:
        "/assets/voice-artist/Reel CARACTERIZACIONES - Franártur Duque.mp3",
    },
    {
      title: "PROMOS",
      source: "/assets/voice-artist/Reel PROMO  - Franártur Duque.mp3",
    },
    {
      title: "PERSONAJES",
      source: "/assets/voice-artist/Reel PERSONAJES - Franártur Duque.mp3",
    },
    {
      title: "REEL VARIADO",
      source: "/assets/voice-artist/Reel VARIADO - Franártur Duque.mp3",
    },
  ];
  tests: Array<any> = [
    {
      name: "Laura Pulido,  S&S Post Production.",
      text:
        "“Franártur es un artista de la voz, comprometido y honesto con su proyectos. Siempre propone caminos para darle valor a agregado a cualquier guión o idea. Lo recomiendo 100%!”.",
    },

    {
      name: "Kiran Fernándes, Director.",
      text:
        "“Trabajar con Fran fue ver comprensión, entusiasmo, creatividad, humor y versatilidad. ¡Es tener un amigo!”",
    },
    {
      name: "Andrés Lopez, Comediante.",
      text:
        "“Franartur es un muchacho alentado, de buena alimentación y resistencia física, es muy sospechoso que cuando aparece Supermán surcando los cielos él no esté entre nosotros trabajando en el Daily Planet. Franartur es auténtico”.",
    },
    {
      name: "Alejandro Ranchez, Director.",
      text:
        "“Franartur es propositivo y enérgico, siempre es pieza clave en el desarrollo de las ideas. Su disposición y entrega siempre es la mejor. ¡Increíble talento y profesionalismo!”",
    },
    {
      name: "Juan Cárdenas. Publicista.",
      text:
        "“La personalidad de Fran irradia arte todo el tiempo, lo que demuestra su pasión por lo que hace; tuve la oportunidad de crear un proyecto a su lado, y además de aportar su gran talento, fue demasiado fácil interactuar y trabajar con él”. ",
    },
    {
      name: "Bill Gates.",
      text: "“Yo era un tipo normal hasta que conocí a Franártur Duque”.",
    },
  ];
  clients: Array<any> = [
    {
      name: "Coca cola",
      url: "",
    },
    {
      name: "La Especial",
      url: "",
    },
    {
      name: "Del Valle",
      url: "",
    },
    {
      name: "Bimbo",
      url: "",
    },
    {
      name: "El Tiempo",
      url: "",
    },
    {
      name: "ETB",
      url: "",
    },
    {
      name: "Samsung",
      url: "",
    },
    {
      name: "Davivienda",
      url: "",
    },
    {
      name: "Éxito",
      url: "",
    },
    {
      name: "Durex",
      url: "",
    },
    {
      name: "MullenLowe SSP3",
      url: "",
    },
    {
      name: "MCCann",
      url: "",
    },
    {
      name: "Ogilvy",
      url: "",
    },
    {
      name: "Havas",
      url: "",
    },
    {
      name: "Leo Burnett",
      url: "",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  download({ audio, title }) {
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", audio);
    link.setAttribute("download", `${title}.mp3`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  downloadAll() {
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", "/assets/voice-artist/voice-artist.zip");
    link.setAttribute("download", `Voice-Artist.zip`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  pauseAllAudios() {
    console.log(this.audiosRef.toArray());
    this.audiosRef.toArray().forEach((a: ElementRef) => {
      a.nativeElement.pause();
      setTimeout(() => {
        a.nativeElement.pause();
      }, 100);
    });
  }
}
