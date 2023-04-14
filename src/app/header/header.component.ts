import { ChangeDetectionStrategy, Component, DoCheck, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { StateService } from '../state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseComponent implements DoCheck {
  constructor(public stateService: StateService, elementRef: ElementRef) {
    super(elementRef)

    this.stateService.getFirst().subscribe((val: any) => {
      console.log(val)
    })
  }

  onCheck(): void {
    console.log('2 ngDoCheck');
  }

  getFirst(): Observable<boolean> {
    this.setRender()
    return this.stateService.getFirst()
  }
}
