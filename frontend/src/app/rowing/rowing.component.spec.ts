import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowingComponent } from './rowing.component';

describe('RowingComponent', () => {
  let component: RowingComponent;
  let fixture: ComponentFixture<RowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
