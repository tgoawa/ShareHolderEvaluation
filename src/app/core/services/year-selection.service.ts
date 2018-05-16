import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YearSelectionService {
  selectedYear$: Observable<number>;
  evalYears: number[] = [2019, 2018, 2017];
  private _selectedYear = new BehaviorSubject<number>(2019);

  constructor() {
    this.selectedYear$ = this._selectedYear.asObservable();
  }

  setEvaluationYear(year: number) {
    this._selectedYear.next(year);
  }

}
