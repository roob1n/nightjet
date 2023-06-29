import {Component} from '@angular/core';
import {ResultListComponent} from "./components/result-list/result-list.component";
import {SearchFormComponent} from "./components/search-form/search-form.component";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    ResultListComponent,
    SearchFormComponent,
    MatGridListModule
  ]
})
export class SearchComponent {
}
