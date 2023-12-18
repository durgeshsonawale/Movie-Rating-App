import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../Movie/movies.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  id:any=5;
  reviewList:any
  constructor(private router:ActivatedRoute,private service:MoviesService){

  }
  ngOnInit(){
    console.log("abcd")
    this.service.movieDetail.asObservable().subscribe((a)=>{this.id=a.id;
    this.service.getReviewById(this.id).subscribe((b)=>{this.reviewList=b;console.log(this.reviewList)})
    
    
    })
  
  }

}
