import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { MovieDetailsViewModel } from '../viewModels';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit{
  public movieId!:number;
  public movieDetails!:any;

  constructor(private movieService:MoviesService,public route:ActivatedRoute){

  }
  ngOnInit(){
    this.movieId = this.route.snapshot.paramMap.get('id')?Number(this.route.snapshot.paramMap.get('id')) :0 ;
    this.getMoviesList();
  }
  getMoviesList(){
    this.movieService.getMoviesDetailsById(this.movieId).subscribe(res=>{
      this.movieDetails = res;
    });
  }

}
