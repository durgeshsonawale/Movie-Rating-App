import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-movie-week',
  templateUrl: './trending-movie-week.component.html',
  styleUrls: ['./trending-movie-week.component.css']
})
export class TrendingMovieWeekComponent {
  list1:any;
  list:any
  dataSource:any;
  movieCol=["title","popularity","release_date","backdrop_path"]
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!:MatSort;
  constructor(private movieService:MoviesService,private router:Router){

  }
  ngOnInit(): void {
    this.movieService.getWeekAll().subscribe(a=>{this.list1=a;this.list=this.list1.results;
      this.dataSource=new MatTableDataSource<any>(this.list);
      this.dataSource.sort=this.sort
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      //console.log(this.dataSource[0])
    
    
    });
  }
  getMovie(list:any){
    this.router.navigate(['trending-movies',list.id])
    this.movieService.movieDetail=list
    console.log(list)

  }
  applyFilter(event:any){
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }
}
