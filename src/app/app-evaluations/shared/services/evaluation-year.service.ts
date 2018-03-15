import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EvaluationYearService {
  selectedYear$: Observable<number>;
  private _selectedYear = new BehaviorSubject<number>(2018);

  constructor() {
    this.selectedYear$ = this._selectedYear.asObservable();
  }

  setEvaluationYear(year: number) {
    this._selectedYear.next(year);
  }

}
