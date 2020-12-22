import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bio",
  templateUrl: "./bio.component.html",
  styleUrls: ["./bio.component.scss"],
})
export class BioComponent implements OnInit {
  imagesPath: string = "/assets/bio-logos/";
  images: any = [
    {
      src: "01-camino.png",
      link: "https://www.thewaytohappiness.org/",
    },
    {
      src: "02-DFW_LOGO.png",
      link: "https://www.drugfreeworld.org/",
    },
    {
      src: "03-narconon.png",
      link: "https://www.narconon.org/",
    },
    {
      src: "04-YHRI.png",
      link: "https://www.youthforhumanrights.org/",
    },
    {
      src: "05-applied.png",
      link: "http://www.appliedscholastics.org/",
    },
    {
      src: "06-cchr.png",
      link: "https://www.cchr.org/",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  openWebLogo(link: string) {
    setTimeout(() => {
      window.open(link, "_blank");
    }, 200);
  }
}
