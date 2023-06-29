import {Component} from '@angular/core';
import {ResultListComponent} from "./components/result-list/result-list.component";
import {SearchFilter, SearchFormComponent} from "./components/search-form/search-form.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {SearchFilterComponent} from "./components/search-filter/search-filter.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    ResultListComponent,
    SearchFormComponent,
    MatGridListModule,
    SearchFilterComponent,
    NgIf
  ]
})
export class SearchComponent {
  searching = false;

  showResults(
    $event: SearchFilter,
    results: ResultListComponent,
    filter: SearchFilterComponent) {
    this.searching = true;
    setTimeout(() => {
      this.searching = false;
      results.isVisible = true;
      filter.isVisible = true;
    }, 2000);
  }
}
