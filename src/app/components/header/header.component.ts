import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { MatDialog } from '@angular/material';
import { BioDialogComponent } from '../bio-dialog/bio-dialog.component';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentScroll:number = 0;
  menuActive:boolean = false;
  queFran:boolean = false;
  constructor(
    private scrollService: ScrollService, 
    public dialog: MatDialog,
    private eventService: EventsService) { }
  
  ngOnInit() {    
    this.scrollService.scroll$.subscribe(scroll => {
      this.currentScroll= scroll;
    })
  }
  openBioDialog(): void {
    
      const dialogRef = this.dialog.open(BioDialogComponent, {
        width: '80vw',
        height: '80vh', 
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');        
      });
    
  }
  toggleMenu() {
    this.menuActive = !this.menuActive
    this.queFran = false;
  }
  goToEvent(name:string) {
    this.eventService.emmit('goTo', name)
  }

}
