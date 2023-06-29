import {Component, OnInit} from '@angular/core';
import {MatCalendarCellClassFunction, MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {map, Observable, startWith, Subject} from "rxjs";
import {MatNativeDateModule} from "@angular/material/core";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  imports: [
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgForOf,
    MatButtonModule,
    AsyncPipe,
    MatNativeDateModule
  ],
  standalone: true
})
export class SearchFormComponent implements OnInit {
  fromControl = new FormControl('');
  toControl = new FormControl('');

  options: string[] = ['Hamburg', 'Kiruna', 'Stockholm', 'Wien', 'Zürich'];
  fromOptions: Observable<string[]> = new Subject();
  toOptions: Observable<string[]> = new Subject();


  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      const random = Math.floor(Math.random() * 3) + 1;

      if(date % 3 === random) {
        return 'date-availability-low'
      } else if((date % 3 + 1) === random) {
        return 'date-availability-medium'
      } else {
        return 'date-availability-high'
      }
    }
    return '';
  };

  ngOnInit() {
    this.fromOptions = this.fromControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.toOptions = this.toControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  search() {

  }

}
