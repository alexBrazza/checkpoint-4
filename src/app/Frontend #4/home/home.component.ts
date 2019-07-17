import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shows = [];

  constructor(private  apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getShow().subscribe(
      (res)  => {
        this.shows = res;
      }
    );
    console.log()
  }

}
