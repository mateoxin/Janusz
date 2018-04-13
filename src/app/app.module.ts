import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JanuszeComponent } from './janusze/janusze.component';

const routers: Routes = [
  {path: '', component: HomeComponent},
  {path: 'janusze', component: JanuszeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JanuszeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
