import { Component, DoCheck, ElementRef } from '@angular/core';
import { BehaviorSubject, debounceTime, filter } from 'rxjs';

@Component({
  template: ''
})
export abstract class BaseComponent implements DoCheck {
  public doCheck = new BehaviorSubject<boolean>(false);

  constructor(private elementRef: ElementRef) {
    this.doCheck.pipe(filter(Boolean), debounceTime(1000)).subscribe(() => {
      this.doCheck.next(false)
      this.elementRef.nativeElement.style.backgroundColor = 'white'
    })
  }

  ngDoCheck(): void {
    this.doCheck.next(true)
    this.elementRef.nativeElement.style.backgroundColor = 'red'
    this.onCheck()
  }

  protected abstract onCheck(): void;
}
