import { Component, OnInit } from '@angular/core';
export interface ITeam{
  name:string;
  subname:string;
  picture:string;
}
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamAgents: Array<ITeam> = [
    {
      name:"Mafe Cortés",
      subname:"Manager Actor Ficción (Colombia)",
      picture:"/assets/agents/1 Mafe Cortés Manager Actor Ficción.jpeg"
    },
    {
      name:"Idealo Pez - Lizette Estrada",
      subname:"Manager Actor Marcas (Colombia)",
      picture:"/assets/agents/2 Idealo Pez Manager Actor Marcas .jpg"
    },
    {
      name:"Class Celebridades",
      subname:"Manager Actor Marcas (México y Estados Unidos)",
      picture:"/assets/agents/3 Class Celebridades - Agencia Actor Marcas (México y Estados Unidos)(1).jpg"
    },    
  ];
  teamProductions: Array<ITeam> = [
    {
      name: "Katherine Manakin",
      subname:"Productora Artística",
      picture:"/assets/productions/4 Katherine Manakin - Productora Artística.png"
    },
    {
      name: "Juliana Noreña",
      subname:"Promoción y Ventas",
      picture:"/assets/productions/5 Juliana Noreña - Promoción y Ventas.jpg"
    },
    {
      name: "Victor Diaz",
      subname:"Postproductor Audio",
      picture:"/assets/productions/6 Victor Días - Postproductor Audio.jpeg"
    },
    {
      name: "Bernardo Garcés",
      subname:"Postproductor Video",
      picture:"/assets/person.png"
    },
    {
      name: "Andrés Algeciras",
      subname:"Animador",
      picture:"/assets/person.png"
    },
    {
      name: "Juan Sebastian",
      subname:"Diseñador",
      picture:"/assets/person.png"
    },
    {
      name: "Mateo Julian",
      subname:"Artista Ilustrador",
      picture:"/assets/productions/10 Mateo Julian - Artista Ilustrador.jpg"
    },
    {
      name: "Juan Ariza",
      subname:"Edición Fotográfica",
      picture:"/assets/person.png"
    },
    {
      name: "Mercedes Rodríguez",
      subname:"Traductora y Adaptadora",
      picture:"/assets/productions/13 Mercedes Rodríguez - Traductora y Adaptadora.jpg"
    },
    {
      name: "Luis Rodriguez",
      subname:"Capacitador de personal",
      picture:"/assets/person.png"
    },
    {
      name: "Cavelier Abogados",
      subname:"Equipo legal",
      picture:"/assets/productions/15 Cavelier Abogados Equipo legal (fondo blanco).png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  goToTop() {
    window.scrollTo(0, 0)  
  }

}
