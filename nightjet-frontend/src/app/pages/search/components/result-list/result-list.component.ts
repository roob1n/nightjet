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
      "title": "Wien",
      "fromVisible": false,
      "title2": "", // Arrival date and time
      "title3": "01.07.2023 21:42", // Departure date and time
      "link": ""
    },
    {
      "title": "Zürich",
      "fromVisible": true,
      "title2": "02.07.2023 07:56",
      "title3": "02.07.2023 21:10",
      "link": ""
    },
    {
      "title": "Hamburg",
      "fromVisible": true,
      "title2": "03.07.2023 08:15",
      "title3": "03.07.2023 22:01",
      "link": ""
    },
    {
      "title": "Stockholm",
      "fromVisible": true,
      "title2": "04.07.2023 09:56",
      "title3": "04.07.2023 18:15",
      "link": ""
    },
    {
      "title": "Kiruna",
      "title2": "05.07.2023 09:14",
      "title3": "",
      "link": ""
    }]

  showResults(searchFilter: SearchFilter) {
    console.log(searchFilter);

  }
}
