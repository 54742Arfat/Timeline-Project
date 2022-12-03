import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    path:'pro', component:TimelineComponent
  },
  {
    path:'home', component:HomeComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
