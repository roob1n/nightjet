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
      "link": "",
      "duration": "953 km / 15 h 05 min"
    }]

  showResults(searchFilter: SearchFilter) {
    console.log(searchFilter);

  }
}
