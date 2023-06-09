import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
//API Key from the movie DB
const apiKey ="fffbda0670187347503d4143a9519905";
//API URl
const url  = "https://api.themoviedb.org/3/";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

/**
 *
 * @returns
 */
  getMoviesList():Observable<any>{
    return this.http.get(url + 'movie/popular?api_key='+apiKey , httpOptions);
  }
  /**
 *
 * @returns
 */
 getMoviesDetailsById(movieId:number):Observable<any>{
  return this.http.get(url + 'movie/'+movieId+'?api_key='+apiKey+'&append_to_response=videos,images', httpOptions);
 }
}
