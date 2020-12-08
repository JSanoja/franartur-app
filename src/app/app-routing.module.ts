import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./templates/home/home.component";
import { ActorComponent } from "./templates/actor/actor.component";
import { BioComponent } from "./templates/bio/bio.component";
import { ContactComponent } from "./templates/contact/contact.component";
import { TeamComponent } from "./templates/team/team.component";
import { VoiceArtistComponent } from "./templates/voice-artist/voice-artist.component";
import { ActorFiccionComponent } from "./templates/actor/actor-ficcion/actor-ficcion.component";
import { ActorMarcaComponent } from "./templates/actor/actor-marca/actor-marca.component";
import { ActorFiccionGalleryComponent } from "./templates/actor/actor-ficcion/gallery/gallery.component";

const routes: Routes = [
  { path: "", component: HomeComponent, data: { preload: true } },
  { path: "bio", component: BioComponent },
  { path: "contacto", component: ContactComponent },
  {
    path: "actor",
    component: ActorComponent,
    children: [],
  },
  { path: "actor/actor-ficcion", component: ActorFiccionComponent },
  {
    path: "actor/actor-ficcion/gallery",
    component: ActorFiccionGalleryComponent,
  },
  { path: "actor/actor-marca", component: ActorMarcaComponent },
  { path: "team", component: TeamComponent },
  { path: "voice-artist", component: VoiceArtistComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
