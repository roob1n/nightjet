import {Component} from '@angular/core';
import {MatListModule} from "@angular/material/list";

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
    MatListModule
  ]
})
export class ResultListComponent {

}
