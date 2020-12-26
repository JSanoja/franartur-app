import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  OnDestroy,
  Inject,
  Input,
} from "@angular/core";
import { Subject, interval, Observable, empty, Subscription } from "rxjs";
import {
  switchMap,
  scan,
  takeWhile,
  debounceTime,
  debounce,
  finalize,
  distinctUntilChanged,
  map,
  share,
} from "rxjs/operators";
import { ScrollService } from "src/app/services/scroll.service";
import { ViewportScroller, DOCUMENT } from "@angular/common";
import { MatButton } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { BioDialogComponent } from "src/app/components/bio-dialog/bio-dialog.component";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { EventsService } from "src/app/services/events.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @Input("video") video: boolean = true;
  oldScroll: number = 0;
  currentScroll: number = 0;
  isHome: boolean;
  current: number = 1;
  max: number = 3;
  inTransition: boolean = false;
  queFran: boolean = false;
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
  categories: Array<any> = [
    {
      title: "Director",
      description:
        "Como Director uso el lenguaje de la comedia para transmitir ideas en todos los formatos. A cada proyecto le imprimo el tratamiento artístico y cinematográfico necesario, para lograr productos de comedia pocas veces vistos en Latam.",
      link: "/director",
      photos: ["/assets/foto.jpg", "/assets/foto.jpg", "/assets/foto.jpg"],
    },
    {
      title: "Actor",
      description:
        "Me gusta que cada personaje que interprete sea único y peculiar, soy capaz de pasar del drama a la comedia, manteniendo un delicado equilibrio entre ambos mundos y uso mi comedia gestual para darle un valor único a las producciones, en cualquiera de sus formatos.",
      link: "/actor",
      photos: ["/assets/foto.jpg", "/assets/foto.jpg", "/assets/foto.jpg"],
    },
    {
      title: "Comediante",
      description:
        "La comedia siempre puede dar vida y reavivar el corazón más marchito, por eso la amo y la hago, es mi forma de darle al mundo maravillas y un poquito de ternura.",
      link: "/comediante",
      photos: ["/assets/foto.jpg", "/assets/foto.jpg", "/assets/foto.jpg"],
    },
    {
      title: "Voice Artist",
      description:
        "Mi experiencia en la actuación y la comedia me permite dar vida a voces diversas, frescas y divertidas, que transmiten confianza y credibilidad a las más exigentes audiencias de América Latina. ",
      link: "/voice-artist",
      photos: ["/assets/foto.jpg", "/assets/foto.jpg", "/assets/foto.jpg"],
    },
    {
      title: "Conferencista",
      description:
        "Mis conferencias inspiran con valores, arte y risa, para lograr personas y equipos de trabajo más éticos, más felices y más productivos. Esto es todo un propósito que hace parte de un grandioso proyecto social y educativo, mucho más amplio, que desarrollo a través de mi marca Pechos de Héroe.",
      link: "conferencista",
      photos: ["/assets/foto.jpg", "/assets/foto.jpg", "/assets/foto.jpg"],
    },

    {
      title: "Sircomedia",
      description:
        "Esta es mi empresa y nace para brindar espacios amplios y diversos para la Comedia como forma de arte. Es una casa matriz de un conjunto de marcas que celebran el don universal de las risas. Justo en el instante en el que se produce una carcajada comienza nuestro universo. ",
      link: "sircomedia",
      photos: ["/assets/foto.jpg", "/assets/foto.jpg", "/assets/foto.jpg"],
    },
  ];
  @ViewChild("home1") home1: ElementRef;
  @ViewChild("home2") home2: ElementRef;
  @ViewChild("home3") home3: ElementRef;
  @ViewChild("homevideo") homeVideo: ElementRef;
  @ViewChild("goToTopRef") goToTopRef: MatButton;

  //capture the scroll event and pass to a function that triggers your own event for clarity and so you can manually trigger
  scrollToSource: Subject<any> = new Subject<any>();
  scroll$: Subscription;
  constructor(
    private scrollService: ScrollService,
    private vc: ViewportScroller,
    public dialog: MatDialog,
    private eventService: EventsService,
    @Inject(DOCUMENT) private document
  ) {}

  ngOnDestroy() {
    // this.scroll$.unsubscribe()
  }

  ngOnInit() {
    console.log("init");
    this.eventService.eventEmit$.subscribe((event) => {
      if (event.name == "goTo" && this.video == true) {
        setTimeout(() => this.goTo(event.action), 200);
      }
    });
    /* this.scroll$ = this.scrollService.scroll$.subscribe(
    (scroll) => {  
      console.log(scroll)      
      this.currentScroll = scroll;
        console.log(this.currentScroll, this.oldScroll) 
        if (!this.inTransition) {
          if (this.currentScroll > this.oldScroll) {              
            let next = this.current < this.max ? this.current +1 : this.max;
            this.current = next;
            let home= `home${next}`;
            console.log('start', home)                
            this.scrollTo(this[home], false);
            this.inTransition = true
          } else {      
            let back = this.current > 1 ? this.current - 1 : 1;
            this.current = back;
            let home= `home${back}`;
            console.log('start',home)
            this.scrollTo(this[home], true);
            this.inTransition = true
          }     
        }
           
        this.oldScroll = this.currentScroll;
        console.log(this.currentScroll, this.oldScroll) 
      
    }); */

    /* this.scrollToSource
      .pipe(
        switchMap(
          ({ targetYPos, invert }) =>
            interval(5).pipe(
              //interval just creates an observable stream corresponding to time, this emits every 1/10th of a second. This can be fixed or make it dynamic depending on the distance to scroll
              scan((acc, curr) => {
                if (invert) return acc - 80;
                return acc + 80;
              }, window.pageYOffset), // scan takes all values from an emitted observable stream and accumulates them, here you're taking the current position, adding a scroll step (fixed at 5, though this could also be dynamic), and then so on, its like a for loop with +=, but you emit every value to the next operator which scrolls, the second argument is the start position
              takeWhile((val) => {
                if (invert) {
                  if (val < targetYPos) {
                    console.log("finish");
                    window.scrollTo(0, targetYPos);
                    setTimeout(() => (this.inTransition = false), 500);
                  }
                  return val > targetYPos;
                } else {
                  if (val > targetYPos) {
                    window.scrollTo(0, targetYPos);
                    setTimeout(() => (this.inTransition = false), 500);
                  }
                  return val < targetYPos;
                }
              })
            ) // stop when you get to the target
        )
      )
      .subscribe((position) => {
        //console.log(position)
        window.scrollTo(0, position);
      }); */
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    if (this.video) {
      let video: HTMLVideoElement = this.homeVideo.nativeElement;
      video.muted = true;
      video.play();
      if (
        !!(
          video.currentTime > 0 &&
          !video.paused &&
          !video.ended &&
          video.readyState > 2
        )
      ) {
        console.log("playing");
      } else {
        video.play();
      }
    }
  }
  scrollTo(target: ElementRef, invert: boolean): void {
    // this assumes you're passing in an ElementRef, it may or may not be appropriate, you can pass them to functions in templates with template variable syntax such as: <div #targetDiv>Scroll Target</div> <button (click)="scrollTo(targetDiv)">Click To Scroll</button>
    if (target == this.home1) {
      this.scrollToSource.next({ targetYPos: 0, invert: invert });
    } else {
      this.scrollToSource.next({
        targetYPos: target.nativeElement.offsetTop,
        invert: invert,
      });
    }
  }
  openBioDialog() {
    const dialogRef = this.dialog.open(BioDialogComponent, {
      width: "80vw",
      height: "80vh",
    });
  }
  goTo(item: string) {
    let element: HTMLElement = document.getElementById(item);
    let top = this.getElementOffset(element).top - 50;
    window.scrollTo(0, top);
    // this.scrollToSource.next({
    //   targetYPos: element.offsetTop + 345,
    //   invert: false,
    // });
  }

  // goToTop() {
  //   this.scrollToSource.next({ targetYPos: 0, invert: true });
  // }
  // goToTop() {
  //   window.scrollTo(0, 0);
  //   // this.smoothScroll(this.goToTopRef._elementRef.nativeElement.offsetTop);
  // }
  smoothScroll(h) {
    let i = h || 0;
    if (i >= 0) {
      setTimeout(() => {
        window.scrollTo(0, i);
        this.smoothScroll(i - 150);
      }, 5);
    } else {
      window.scrollTo(0, 0);
    }
  }
  getElementOffset(element: HTMLElement) {
    var de = document.documentElement;
    var box = element.getBoundingClientRect();
    var top = box.top + window.pageYOffset - de.clientTop;
    var left = box.left + window.pageXOffset - de.clientLeft;
    return { top: top, left: left };
  }
}
