import { ChangeDetectionStrategy, Component, DoCheck, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseComponent } from 'src/app/base/base.component';
import { StateService } from '../../state.service';

interface User {
  id: number;
  name: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-list3detail',
  templateUrl: './list3detail.component.html',
  styleUrls: ['./list3detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class List3detailComponent extends BaseComponent {
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
    console.log('3-detail ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('3-detail ngOnChanges', changes);
  }

  getUsers(): Observable<User[]> {
    console.log('3-detail getUsers called')
    return this.users
  }

  doNothing() {
    console.log('yo');
  }
}
