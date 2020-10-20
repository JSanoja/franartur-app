import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./templates/home/home.component";
import { ActorComponent } from "./templates/actor/actor.component";
import { BioComponent } from "./templates/bio/bio.component";
import { ContactComponent } from "./templates/contact/contact.component";
import { TeamComponent } from "./templates/team/team.component";
import { VoiceArtistComponent } from "./templates/voice-artist/voice-artist.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "bio", component: BioComponent },
  { path: "contacto", component: ContactComponent },
  { path: "actor", component: ActorComponent },
  { path: "team", component: TeamComponent },
  { path: "voice-artist", component: VoiceArtistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
