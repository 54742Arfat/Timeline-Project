import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms"
import { TimelineModule } from "primeng/timeline";

import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    TimelineModule,
    AppRoutingModule,
    RouterModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
