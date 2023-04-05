import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { MovieDetailsViewModel } from '../viewModels';
import { MoviesViewModel } from '../viewModels/movies.view-model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit  {
  public moviesList:MoviesViewModel[]=[];
  public movieDetails!:MovieDetailsViewModel;
  public showMovieDetails:boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public obs!: Observable<any>;
  dataSource: MatTableDataSource<MoviesViewModel> = new MatTableDataSource<MoviesViewModel>();


  constructor(private movieService:MoviesService,private cd:ChangeDetectorRef,
    private router:Router){

  }
  ngOnInit() {
    this.getMoviesList();

  }
  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
  getMoviesList(){
    this.movieService.getMoviesList().subscribe(res=>{
      this.moviesList = res.results;
      this.dataSource = new MatTableDataSource<MoviesViewModel>(this.moviesList);
      this.cd.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      console.log(this.obs);

    });
  }

  navigateMovieDetails(movieId:number){
   // this.router.navigate(['/movies-list/details/', { id: heroId }]);
    this.router.navigateByUrl('/movies-list/details/'+movieId);
  }


}
