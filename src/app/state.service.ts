import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly first = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggleFirst() {
    this.first.next(!this.first.getValue());
  }

  getFirst(): Observable<boolean> {
    return this.first;
  }
}
