import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatButton } from "@angular/material";
export interface ITeam {
  name: string;
  subname: string;
  picture: string;
}
@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
})
export class TeamComponent implements OnInit {
  teamAgents: Array<ITeam> = [
    {
      name: "Mafe Cortés",
      subname: "Manager Actor Ficción (Colombia)",
      picture: "/assets/agents/1 Mafe Cortés Manager Actor Ficción.png",
    },
    {
      name: "Idealo Pez - Lizette Estrada",
      subname: "Manager Actor Marcas (Colombia)",
      picture: "/assets/agents/2 Idealo Pez Manager Actor Marcas .png",
    },
    {
      name: "Class Celebridades",
      subname: "Manager Actor Marcas (México y Estados Unidos)",
      picture:
        "/assets/agents/3 Class Celebridades - Agencia Actor Marcas (México y Estados Unidos).png",
    },
  ];
  teamProductions: Array<ITeam> = [
    {
      name: "Katherine Manakin",
      subname: "Productora Artística",
      picture:
        "/assets/productions/4 Katherine Manakin - Productora Artística.png",
    },
    {
      name: "Juliana Noreña",
      subname: "Promoción y Ventas",
      picture: "/assets/productions/5 Juliana Noreña - Promoción y Ventas.JPG",
    },
    {
      name: "Victor Diaz",
      subname: "Postproductor Audio",
      picture: "/assets/productions/6 Victor Días - Postproductor Audio.png",
    },
    /* {
      name: "Bernardo Garcés",
      subname:"Postproductor Video",
      picture:"/assets/person.png"
    }, */

    {
      name: "Andrés Algeciras",
      subname: "Animador",
      picture: "/assets/productions/8 Andrés Algeciras - Animador .png",
    },
    {
      name: "Juan Sebastian",
      subname: "Diseñador",
      picture: "/assets/productions/9 Juan Sebastian - Diseñador.png",
    },
    {
      name: "Mateo Julian",
      subname: "Artista Ilustrador",
      picture: "/assets/productions/10 Mateo Julian - Artista Ilustrador.png",
    },
    {
      name: "Juan Ariza",
      subname: "Edición Fotográfica",
      picture: "/assets/productions/10 Juan Ariza - Edición Fotográfica.jpg",
    },
    {
      name: "Mercedes Rodríguez",
      subname: "Traductora y Adaptadora",
      picture:
        "/assets/productions/11 Mercedes Rodríguez - Traductora y Adaptadora.JPG",
    },
    {
      name: "Luis Rodriguez",
      subname: "Capacitador de personal",
      picture:
        "/assets/productions/12 Luis Rodriguez - Capacitador de personal.png",
    },
    {
      name: "Cavelier Abogados",
      subname: "Equipo legal",
      picture:
        "/assets/productions/15 Cavelier Abogados- Equipo legal (fondo negro).png",
    },
  ];
  @ViewChild("goToTopRef") goToTopRef: MatButton;
  constructor() {}

  ngOnInit(): void {}

  goToTop() {
    this.smoothScroll(this.goToTopRef._elementRef.nativeElement.offsetTop);
  }
  smoothScroll(h) {
    let i = h || 0;
    if (i >= 0) {
      setTimeout(() => {
        window.scrollTo(0, i);
        this.smoothScroll(i - 150);
      }, 10);
    } else {
      window.scrollTo(0, 0);
    }
  }
}
