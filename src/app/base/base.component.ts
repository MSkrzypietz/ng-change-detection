import { Component, DoCheck, ElementRef } from '@angular/core';
import { BehaviorSubject, debounceTime, filter } from 'rxjs';

@Component({
  template: ''
})
export abstract class BaseComponent implements DoCheck {
  public doCheck = new BehaviorSubject<boolean>(false);
  public doRender = new BehaviorSubject<boolean>(false);

  constructor(protected elementRef: ElementRef) {
    this.doCheck.pipe(filter(Boolean), debounceTime(1000)).subscribe(() => {
      this.doCheck.next(false)
      this.elementRef.nativeElement.style.backgroundColor = 'white'
    })

    this.doRender.pipe(filter(Boolean), debounceTime(1000)).subscribe(() => {
      this.doRender.next(false)
      this.elementRef.nativeElement.style.backgroundColor = 'white'
    })
  }

  ngDoCheck(): void {
    this.doCheck.next(true)
    this.elementRef.nativeElement.style.backgroundColor = 'red'
    this.onCheck()
  }

  public setRender(): void {
    this.doRender.next(true)
    this.elementRef.nativeElement.style.backgroundColor = 'blue'
  }

  protected abstract onCheck(): void;
}
