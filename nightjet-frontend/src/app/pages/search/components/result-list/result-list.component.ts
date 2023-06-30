import {Component} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {SearchFilter} from "../search-form/search-form.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

export interface Journey {
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
      "title": "Wien",
      "title2": "2023-07-01 10:00 AM", // Arrival date and time
      "title3": "2023-07-05 03:30 PM", // Departure date and time
      "link": ""
    },
    {
      "title": "Zürich",
      "title2": "2023-07-02 09:30 AM",
      "title3": "2023-07-04 02:45 PM",
      "link": ""
    },
    {
      "title": "Hamburg",
      "title2": "2023-07-03 11:15 AM",
      "title3": "2023-07-06 04:20 PM",
      "link": ""
    },
    {
      "title": "Stockholm",
      "title2": "2023-07-04 08:45 AM",
      "title3": "2023-07-07 01:10 PM",
      "link": ""
    },
    {
      "title": "Kiruna",
      "title2": "2023-07-05 02:00 PM",
      "title3": "2023-07-08 10:30 AM",
      "link": ""
    }]

  showResults(searchFilter: SearchFilter) {
    console.log(searchFilter);

  }
}
