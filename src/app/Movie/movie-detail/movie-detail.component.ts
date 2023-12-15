import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id:any;
  movieDetail:any;
  movieDetail1:any
  review:any
  cast:any
  dataSource:any
  fragment!:string
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  constructor(private route:ActivatedRoute,private movieService:MoviesService){

  }
  
  ngOnInit(): void {
    this.movieDetail1=this.movieService.movieDetail
   
    this.route.paramMap.subscribe((a)=>{this.id=a.get('id');
    this.movieService.getById(this.id).subscribe((a)=> {this.movieDetail=a;
      this.cast=this.movieDetail.cast
      this.dataSource=new MatTableDataSource<any>(this.cast);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      
    
    
    })
    this.movieService.getReviewById(this.id).subscribe((a)=>this.review=a)
  
  
  });
  }
  go(section:string){
    window.location.hash = '';
      window.location.hash = section;
  }
  seeReview(review:string){
    window.location.hash = '';
      window.location.hash = review;
  }


}
