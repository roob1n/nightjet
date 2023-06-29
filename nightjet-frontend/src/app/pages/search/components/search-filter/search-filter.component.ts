import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class SearchFilterComponent {
  isVisible = false;
}
