import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api:string="https://api.themoviedb.org/3/trending/movie/day?api_key=17031c1a6135146fa1083d1385d453c0 "
  api1:string="https://api.themoviedb.org/3/movie"
  api2:string=" https://api.themoviedb.org/3/movie"
  api3:string="https://api.themoviedb.org/3/trending/movie/week?api_key=17031c1a6135146fa1083d1385d453c0 "
  movieDetail:BehaviorSubject<any>=new BehaviorSubject<any>(null);
  movieDetail5:any

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(this.api);
  }
  getById(id:any){
    return this.http.get(`${this.api1}/${id}/credits?api_key=17031c1a6135146fa1083d1385d453c0 `)
  }

  getReviewById(id:any){
    return this.http.get(`${this.api2}/${id}/reviews?api_key=17031c1a6135146fa1083d1385d453c0`);
  }
  getWeekAll(){
    return this.http.get(this.api3);
  }
  getMovieById(id:any){
  
    
    return this.getAll().pipe(filter((a)=>a.results.id===id));
    
    
    
    }
  }
  
  


