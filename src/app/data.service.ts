// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private sharedVariable = new BehaviorSubject<number>(0);
  sharedVariable$ = this.sharedVariable.asObservable();

  setSharedVariable(value: number): void {
    this.sharedVariable.next(value);
  }
}
