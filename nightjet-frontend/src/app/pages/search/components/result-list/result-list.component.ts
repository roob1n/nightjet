import {Component} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {SearchFilter} from "../search-form/search-form.component";
import {NgIf} from "@angular/common";

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  standalone: true,
  imports: [
    MatListModule,
    NgIf
  ]
})
export class ResultListComponent {
  isVisible = false;

  showResults(searchFilter: SearchFilter) {
    console.log(searchFilter);

  }
}
