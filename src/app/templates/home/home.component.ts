import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy, Inject } from '@angular/core';
import { Subject, interval, Observable, empty, Subscription  } from 'rxjs';
import { switchMap, scan, takeWhile, debounceTime, debounce, finalize, distinctUntilChanged, map, share } from 'rxjs/operators';
import { ScrollService } from 'src/app/services/scroll.service';
import { ViewportScroller } from '@angular/common';
import { MatDialog } from '@angular/material';
import { BioDialogComponent } from 'src/app/components/bio-dialog/bio-dialog.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  oldScroll:number = 0;
  currentScroll:number = 0;
  interval=10;
  isHome: boolean;
  current:number  = 1;
  max:number = 3;
  inTransition:boolean= false;
  @ViewChild('home1',{static:false}) home1: ElementRef;
  @ViewChild('home2',{static:false}) home2: ElementRef;
  @ViewChild('home3',{static:false}) home3: ElementRef;
  @ViewChild('homevideo',{static:false}) homeVideo: ElementRef;
  
  //capture the scroll event and pass to a function that triggers your own event for clarity and so you can manually trigger
  scrollToSource: Subject<any> = new Subject<any>();  
  constructor(private scrollService: ScrollService, private vc:ViewportScroller, public dialog: MatDialog) { }
  scroll$: Subscription;
  ngOnDestroy() {
    this.scroll$.unsubscribe()
  }

  ngOnInit() {    
  this.scroll$ = this.scrollService.scroll$.subscribe(
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
      
    });

    this.scrollToSource.pipe(      
      switchMap(({targetYPos, invert}) =>       
        interval(this.interval).pipe( //interval just creates an observable stream corresponding to time, this emits every 1/10th of a second. This can be fixed or make it dynamic depending on the distance to scroll        
          scan((acc, curr) =>  {
            this.interval = this.interval / 10
            if (invert) return acc -50
            return acc + 50
          }, window.pageYOffset), // scan takes all values from an emitted observable stream and accumulates them, here you're taking the current position, adding a scroll step (fixed at 5, though this could also be dynamic), and then so on, its like a for loop with +=, but you emit every value to the next operator which scrolls, the second argument is the start position
          takeWhile(val => {  
                     
            if (invert) {
              if (val < targetYPos) {
                this.interval = 10;
                console.log('finish')                 
                window.scrollTo(0,targetYPos)
                setTimeout(()=>this.inTransition = false, 500)
                
              }
              return val > targetYPos
            }
            else {
              if (val > targetYPos) {
                this.interval = 10;
                console.log('finish')                 
                window.scrollTo(0,targetYPos)
                setTimeout(()=>this.inTransition = false, 500)
                                
              }
              return val < targetYPos
            }  
            
          })
        ), // stop when you get to the target      
      ), 
      ).subscribe(position => {
      //console.log(position)  
      window.scrollTo(0, position)      
    }); 
  }
   
  ngAfterViewInit() {
    window.scrollTo(0, 0)
    let video: HTMLVideoElement = this.homeVideo.nativeElement;
    video.muted = true; 
    /* window.scrollTo(0, 0)
    this.home1.nativeElement.scrollIntoView();
    setTimeout(()=> {
      this.home1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },1000) 
    setTimeout(()=> {
      this.home2.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },2000)    */
  }
  scrollTo(target: ElementRef, invert:boolean): void {
    // this assumes you're passing in an ElementRef, it may or may not be appropriate, you can pass them to functions in templates with template variable syntax such as: <div #targetDiv>Scroll Target</div> <button (click)="scrollTo(targetDiv)">Click To Scroll</button>
    if (target == this.home1 ) {
      this.scrollToSource.next({targetYPos: 0, invert: invert});  
    } else {
      this.scrollToSource.next({targetYPos: target.nativeElement.offsetTop, invert: invert});
    }
    
  }
  changeNext() {
    let next = this.current < this.max ? this.current +1 : this.max;
                this.current = next;
                let home= `home${next}`;
                console.log(home)
                this.inTransition = true
                this.scrollTo(this[home], false);    
    /* if (this.isHome) {
      this.scrollTo(this.home2, false);
      this.isHome = false
    } else {      
      this.scrollTo(this.home1, true);
      this.isHome = true
    }*/
  } 
  changePrev() {
    let next = this.current > 1 ? this.current - 1 : 1;
                this.current = next;
                let home= `home${next}`;
                console.log(this[home])
                this.inTransition = true
                this.scrollTo(this[home], true);    
    /* if (this.isHome) {
      this.scrollTo(this.home2, false);
      this.isHome = false
    } else {      
      this.scrollTo(this.home1, true);
      this.isHome = true
    }*/
  } 
  openBioDialog() {
    const dialogRef = this.dialog.open(BioDialogComponent, {
      width: '80vw',
      height: '80vh', 
    });
  }
}
