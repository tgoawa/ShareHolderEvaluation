import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ReadOnlyService {
  readOnly$: Observable<boolean>;
  private _readOnly = new BehaviorSubject<boolean>(true);

  constructor() {
    this.readOnly$ = this._readOnly.asObservable();
  }

  setReadOnly(val: boolean) {
    this._readOnly.next(val);
  }

}
