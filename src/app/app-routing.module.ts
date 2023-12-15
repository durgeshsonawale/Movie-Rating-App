import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './Movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './Movie/movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { TrendingMovieWeekComponent } from './Movie/trending-movie-week/trending-movie-week.component';
//import { MovieCardsComponent } from './Movie/movie-cards/movie-cards.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [{
  path:'home',component:HomeComponent
},
{ path:"trending-movies",component:MovieListComponent},
{ path:"trending-movies-weekly",component:TrendingMovieWeekComponent},
{path:"trending-movies/:id",component:MovieDetailComponent},

{path:"",redirectTo:"trending-movies",pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
