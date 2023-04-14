import { ChangeDetectionStrategy, Component, DoCheck, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { StateService } from '../state.service';

interface User {
  id: number;
  name: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class List2Component extends BaseComponent implements OnChanges, DoCheck {
  private readonly users = new BehaviorSubject<User[]>([]);

  constructor(public stateService: StateService, elementRef: ElementRef) {
    super(elementRef)

    const newUsers = [...new Array(2).keys()].map((i: number) => {
      return {
        id: i,
        name: `User ${i}`,
        isSelected: false
      }
    })
    this.users.next(newUsers)
  }

  onCheck(): void {
    console.log('2 ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2 ngOnChanges', changes);
  }

  getUsers(): Observable<User[]> {
    console.log('2 getUsers called')
    this.setRender()
    return this.users
  }
}
