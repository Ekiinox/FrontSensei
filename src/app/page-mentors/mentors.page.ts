import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.page.html',
  styleUrls: ['./mentors.page.scss'],
})
export class MentorsPage implements OnInit {

  mentors = [
    {
      name: "JACKI",
      id: 1,
    }
  ];

  goToMentorPage(id) {
      console.log(id)
  }

  constructor() { }

  
  ngOnInit() {
  }

}
