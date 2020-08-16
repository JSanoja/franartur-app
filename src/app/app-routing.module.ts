import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { ActorComponent } from './templates/actor/actor.component';


const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'actor', component: ActorComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
