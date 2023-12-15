import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMovieWeekComponent } from './trending-movie-week.component';

describe('TrendingMovieWeekComponent', () => {
  let component: TrendingMovieWeekComponent;
  let fixture: ComponentFixture<TrendingMovieWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingMovieWeekComponent]
    });
    fixture = TestBed.createComponent(TrendingMovieWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
