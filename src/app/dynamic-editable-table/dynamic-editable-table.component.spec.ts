import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEditableTableComponent } from './dynamic-editable-table.component';

describe('DynamicEditableTableComponent', () => {
  let component: DynamicEditableTableComponent;
  let fixture: ComponentFixture<DynamicEditableTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicEditableTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicEditableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
