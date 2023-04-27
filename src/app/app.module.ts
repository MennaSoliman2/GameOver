import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { CategoryComponent } from './components/category/category.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlatformComponent } from './components/platform/platform.component';
import { RegisterComponent } from './components/register/register.component';
import { SortComponent } from './components/sort/sort.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    AllGamesComponent,
    CategoryComponent,
    GameDetailsComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PlatformComponent,
    RegisterComponent,
    SortComponent,
    NotfoundComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
