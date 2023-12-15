import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  list1:any;
  list:any
  dataSource:any;
  bool=false;
  checked:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  checked1=false
  movieCol=["title","popularity","release_date","backdrop_path"]
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!:MatSort;
  constructor(private movieService:MoviesService,private router:Router){

  }
  ngOnInit(): void {
    this.movieService.getAll().subscribe(a=>{this.list1=a;
      this.checked.asObservable().subscribe((a)=> {this.bool=a;
      if(this.bool){
       
      this.list=this.list1.results.filter((a: { adult: boolean; })=>a.adult=false)
        console.log(this.list)
    }
      else{
        
        this.list=this.list1.results.filter((a: { adult: boolean; })=>a.adult=true)
        console.log(this.list);
      }
      
      this.dataSource=new MatTableDataSource<any>(this.list);
      this.dataSource.sort=this.sort
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      //console.log(this.dataSource[0])
    
    
  })});
  }
  getMovie(list:any){
    this.router.navigate(['trending-movies',list.id])
    this.movieService.movieDetail=list
    console.log(list)

  }
  getChecked(){
    return this.checked.getValue();
  }
  applyFilter(event:any){
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }
  onEnter(){
    console.log(this.getChecked())
    this.checked.next(!this.getChecked())
    this.checked1=!this.checked1
    
  }

}
