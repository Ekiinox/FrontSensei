import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-page-connection',
  templateUrl: './page-connection.component.html',
  styleUrls: ['./page-connection.component.scss'],
})
export class PageConnectionComponent implements OnInit {

  articles;
  user;

  constructor(private apiService: ApiService) { 

    this.user = new User(1, "bob", "bobi");
  }

  ngOnInit() {}

  ionViewDidEnter(){
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    })
  }

  onClick(){
    
  }

}
