import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List3detailComponent } from './list3detail.component';

describe('List3detailComponent', () => {
  let component: List3detailComponent;
  let fixture: ComponentFixture<List3detailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List3detailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List3detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
