import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  data: any; //api data
  otherMovie: any;
  showOtherMovie:any;
  value = ''; //user input
  //movie details
  original_title: any;
  overview: any;
  poster_path:any;
  popularity:any;
  release_date: any;

  constructor(private http: HttpClient) { 
    this.onEnter(this.value);
   }

  ngOnInit() {
    console.log("Loaded");
    this.defaultMovies();
  }

  //movie with id
  // old url: https://api.themoviedb.org/3/movie/157336?api_key=0c59cd271cda403e2120979633303c38
  //movie with query
  //newUrl : https://api.themoviedb.org/3/search/movie?api_key=0c59cd271cda403e2120979633303c38&query=Forrest
  // ** https://developers.themoviedb.org/3/getting-started/search-and-query-for-details

  getValues() {
      this.http.get('https://api.themoviedb.org/3/search/movie?api_key=0c59cd271cda403e2120979633303c38&query=' + this.value).subscribe(response => {
        this.data = response;
        console.log(this.data);

        var stringData = JSON.stringify(this.data);
        var parData = JSON.parse(stringData);
        var test = parData.results[0];
        var imgUrl = 'https://image.tmdb.org/t/p/w500/';
        this.original_title = test.original_title;
        this.overview = test.overview;
        this.poster_path = imgUrl + test.poster_path;
        this.popularity = test.popularity;
        this.release_date = test.release_date;

        console.log(test);
      }, error => {
        console.log(error);
      });
  }

  defaultMovies(){
    this.http.get("https://api.themoviedb.org/3/trending/movie/day?api_key=0c59cd271cda403e2120979633303c38").subscribe(res =>{
        this.otherMovie = res;
        var newData = this.otherMovie;
        var mainNewData = newData.results;
        this.showOtherMovie = mainNewData;
        console.log(mainNewData);
        console.log(this.showOtherMovie);
    });
  }

  onEnter(value: string) { 
    this.value = value; 
    this.getValues();
    console.log(this.value);
  }

  

}
