import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './Movie/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './Movie/movie-detail/movie-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatInputModule} from '@angular/material/input'
import {MatSortModule} from '@angular/material/sort';
import { HomeComponent } from './home/home.component';
//import { MovieCardsComponent } from './Movie/movie-cards/movie-cards.component'
import {MatCardModule} from '@angular/material/card';
import { TrendingMovieWeekComponent } from './Movie/trending-movie-week/trending-movie-week.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
//import { FontAwesomeModule } from '@fortawesome/fontawesome-common-types';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    HomeComponent,
    TrendingMovieWeekComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
   MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatSlideToggleModule
    
    // MatButtonModule,
    // MatCardModule,
    // MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
