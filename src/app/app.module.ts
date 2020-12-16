import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./templates/home/home.component";
import { AnimateModule } from "./animate/animate.module";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { ActorComponent } from "./templates/actor/actor.component";
import { ScrollService } from "./services/scroll.service";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { BioDialogComponent } from "./components/bio-dialog/bio-dialog.component";
import { FooterLargeComponent } from "./components/footer-large/footer-large.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { TopHeaderComponent } from "./components/top-header/top-header.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatSelectModule } from "@angular/material/select";
import { EventsService } from "./services/events.service";
import { BioComponent } from "./templates/bio/bio.component";
import { ContactComponent } from "./templates/contact/contact.component";
import { TeamComponent } from "./templates/team/team.component";
import { MatTabsModule } from "@angular/material/tabs";
import { VoiceArtistComponent } from "./templates/voice-artist/voice-artist.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { GoToTopComponent } from "./components/go-to-top/go-to-top.component";
import { WhoFranWantComponent } from "./components/who-fran-want/who-fran-want.component";
import { ActorFiccionComponent } from "./templates/actor/actor-ficcion/actor-ficcion.component";
import { ActorMarcaComponent } from "./templates/actor/actor-marca/actor-marca.component";
import { ActorFiccionGalleryComponent } from "./templates/actor/actor-ficcion/gallery/gallery.component";
import { GalleryModule, GALLERY_CONFIG } from "ng-gallery";
import { LightboxModule, LIGHTBOX_CONFIG } from "ng-gallery/lightbox";
import { ActorMarcaGalleryComponent } from "./templates/actor/actor-marca/gallery/gallery.component";
import { ComediaComponent } from "./templates/comedia/comedia.component";
import { ComediaGalleryComponent } from "./templates/comedia/gallery/gallery.component";
import { GoBackComponent } from './components/go-back/go-back.component';
import { DirectorComponent } from './templates/director/director.component';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: "horizontal",
  slidesPerView: "auto",
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
    TopHeaderComponent,
    BioComponent,
    ContactComponent,
    TeamComponent,
    VoiceArtistComponent,
    GoToTopComponent,
    WhoFranWantComponent,
    ActorFiccionComponent,
    ActorMarcaComponent,
    ActorFiccionGalleryComponent,
    ActorMarcaGalleryComponent,
    ComediaComponent,
    ComediaGalleryComponent,
    GoBackComponent,
    DirectorComponent,
  ],
  entryComponents: [BioDialogComponent],
  imports: [
    MatGridListModule,
    MatTabsModule,
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
    MatInputModule,
    MatExpansionModule,
    SwiperModule,
    FontAwesomeModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
    LightboxModule,
  ],
  providers: [
    ScrollService,
    EventsService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: "contain",
        thumb: false,
        counterPosition: "top",
      },
    },
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
