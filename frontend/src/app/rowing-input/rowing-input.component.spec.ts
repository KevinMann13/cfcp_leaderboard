import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowingInputComponent } from './rowing-input.component';

describe('RowingInputComponent', () => {
  let component: RowingInputComponent;
  let fixture: ComponentFixture<RowingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowingInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
