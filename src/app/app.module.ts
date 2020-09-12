import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './templates/home/home.component';
import { AnimateModule } from './animate/animate.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule, MatSidenavModule, MatListModule} from  '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { ActorComponent } from './templates/actor/actor.component';
import { ScrollService } from './services/scroll.service';
import { MatExpansionModule } from '@angular/material/expansion';

import {MatDialogModule} from '@angular/material/dialog';
import { BioDialogComponent } from './components/bio-dialog/bio-dialog.component';
import { FooterLargeComponent } from './components/footer-large/footer-large.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';
import { EventsService } from './services/events.service'
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActorComponent,
    BioDialogComponent,
    FooterLargeComponent,
    TopHeaderComponent
  ],
  entryComponents: [ BioDialogComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimateModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule, 
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    SwiperModule,
    FontAwesomeModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [
    ScrollService,
    EventsService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
