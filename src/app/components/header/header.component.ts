import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentScroll:number = 0;
  constructor(private scrollService: ScrollService) { }

  ngOnInit() {    
    this.scrollService.scroll$.subscribe(scroll => {
      this.currentScroll= scroll;
    })
  }

}
