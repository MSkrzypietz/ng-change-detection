import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List2detailComponent } from './list2detail.component';

describe('List2detailComponent', () => {
  let component: List2detailComponent;
  let fixture: ComponentFixture<List2detailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List2detailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List2detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
