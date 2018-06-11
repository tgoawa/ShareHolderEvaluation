import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YearSelectionService {
  selectedEvalYear$: Observable<number>;
  selectedGoalYear$: Observable<number>;
  goalYears: number[] = [2019, 2018];
  evalYears: number[] = [2018];
  private _selectedEvalYear = new BehaviorSubject<number>(2018);
  private _selectedGoalYear = new BehaviorSubject<number>(2019);

  constructor() {
    this.selectedEvalYear$ = this._selectedEvalYear.asObservable();
    this.selectedGoalYear$ = this._selectedGoalYear.asObservable();
  }

  setEvaluationYear(year: number) {
    this._selectedEvalYear.next(year);
  }

  setGoalYear(year: number) {
    this._selectedGoalYear.next(year);
  }

}
