// src/app/window-scroll.service.ts

import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent ,  Observable, empty } from 'rxjs';
import { map, share, auditTime } from 'rxjs/operators';


@Injectable()
export class ScrollService {

  public scroll$:Observable<number>;

  constructor(
    @Inject(DOCUMENT) private document:any,
    @Inject(PLATFORM_ID) private platformId: Object
  ){
    if(isPlatformBrowser(this.platformId)){
      this.scroll$ = fromEvent(window, 'scroll').pipe(
        auditTime(200),
        map(event =>{
          return window.scrollY || this.document.documentElement.scrollTop;
        }),      
        share());
    }
    else{
      this.scroll$ = empty();
    }
  }
}