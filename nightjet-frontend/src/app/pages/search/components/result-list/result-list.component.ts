import {Component} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {SearchFilter} from "../search-form/search-form.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

export interface Journey {
  fromVisible?: boolean;
  title: string;
  title2: string;
  title3: string;
  link: string;
  text: string;
}

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  standalone: true,
  imports: [
    MatListModule,
    NgIf,
    NgForOf,
    MatCardModule,
    MatButtonModule
  ]
})
export class ResultListComponent {
  isVisible = true;
  journeyList = [
    {
      "title": "Wien - Zürich",
      "title2": "01.07 21:42",
      "title3": "02.07 07:56",
      "image": "oebb.png",
      "link": "",
      "duration": "592 km / 8 h 53 min"
    },
    {
      "title": "Zürich - Hamburg",
      "title2": "02.07 21:10",
      "title3": "03.07 08:15",
      "image": "oebb.png",
      "link": "",
      "duration": "658 km / 10 h 55 min"
    },
    {
      "title": "Hamburg - Stockholm",
      "title2": "03.07 22:01",
      "title3": "04.07 09:56",
      "image": "snell.png",
      "link": "",
      "duration": "807 km / 10 h 55 min"
    },
    {
      "title": "Stockholm - Kiruna",
      "title2": "04.07 18:15",
      "title3": "05.07 09:14",
      "image": "vy.png",
      "link": "https://www.vy.se/en/see-travel-suggestions?from=Stockholm%20Central&fromExternalId=SILVER_RAIL%3A1%3A74&to=Kiruna%20station&toExternalId=SILVER_RAIL%3A1602%3A74&passengers=W3siaWQiOjYwLCJhZ2UiOm51bGwsImRpc2NvdW50cyI6W10sImNhdGVnb3J5IjoiQWR1bHQiLCJuYW1lIjoiQWR1bHQifSx7ImlkIjo2MSwiYWdlIjpudWxsLCJkaXNjb3VudHMiOltdLCJjYXRlZ29yeSI6IkFkdWx0IiwibmFtZSI6IkFkdWx0In1d&addons=W3sidHlwZSI6ImJpY3ljbGUiLCJudW1iZXJUb0J1eSI6MH0seyJ0eXBlIjoibGFyZ2VfYW5pbWFsIiwibnVtYmVyVG9CdXkiOjB9LHsidHlwZSI6InNtYWxsX2FuaW1hbCIsIm51bWJlclRvQnV5IjowfSx7InR5cGUiOiJzdHJvbGxlciIsIm51bWJlclRvQnV5IjoxfSx7InR5cGUiOiJ3aGVlbGNoYWlyIiwibnVtYmVyVG9CdXkiOjB9XQ%3D%3D&fromDateTime=2023-07-05T16%3A00%3A38.408Z&fromPosition=59.33,18.05806&toPosition=67.86722,20.20028",
      "duration": "953 km / 15 h 05 min"
    }]

  showResults(searchFilter: SearchFilter) {
    console.log(searchFilter);

  }
}
