import { ChangeDetectionStrategy, Component, ElementRef, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/base/base.component';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-list2detail',
  templateUrl: './list2detail.component.html',
  styleUrls: ['./list2detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class List2detailComponent extends BaseComponent {
  constructor(public stateService: StateService, elementRef: ElementRef) {
    super(elementRef)
  }

  onCheck(): void {
    console.log('2-detail ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2-detail ngOnChanges', changes);
  }

  getFirst(): Observable<boolean> {
    this.setRender()
    return this.stateService.getFirst()
  }
}
