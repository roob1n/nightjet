import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {map, Observable, startWith, Subject} from "rxjs";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCalendarCellClassFunction, MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatListModule
  ]
})
export class SearchComponent implements OnInit {
  fromControl = new FormControl('');
  toControl = new FormControl('');

  options: string[] = ['Hamburg', 'Kiruna', 'Stockholm', 'Wien', 'Zürich'];
  fromOptions: Observable<string[]> = new Subject();
  toOptions: Observable<string[]> = new Subject();

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
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
