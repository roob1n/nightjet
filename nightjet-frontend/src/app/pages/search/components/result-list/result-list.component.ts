import {Component} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {SearchFilter} from "../search-form/search-form.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

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
    MatCardModule
  ]
})
export class ResultListComponent {
  isVisible = true;
  journeyList = [
    {
      title: 'Wien',
      title2: '',
      title3: '',
      link: ''
    },
    {
      title: 'Zürich',
      title2: '',
      title3: '',
      link: ''
    },
    {
      title: 'Hamburg',
      title2: '',
      title3: '',
      link: ''
    },
    {
      title: 'Stockholm',
      title2: '',
      title3: '',
      link: ''
    },
    {
      title: 'Kiruna',
      title2: '',
      title3: '',
      link: ''
    }];

  showResults(searchFilter: SearchFilter) {
    console.log(searchFilter);

  }
}
