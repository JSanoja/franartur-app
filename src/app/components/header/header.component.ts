import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { MatDialog } from '@angular/material';
import { BioDialogComponent } from '../bio-dialog/bio-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentScroll:number = 0;
  constructor(private scrollService: ScrollService, public dialog: MatDialog) { }

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

}
