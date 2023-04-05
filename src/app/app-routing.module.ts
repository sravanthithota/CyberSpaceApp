import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
    { path: 'movies-list', component: MoviesListComponent },
    { path: 'movies-list/details/:id', component: MoviesDetailsComponent },
    { path: '',   redirectTo: '/movies-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
