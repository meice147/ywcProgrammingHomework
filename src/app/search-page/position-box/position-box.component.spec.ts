import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionBoxComponent } from './position-box.component';

describe('PositionBoxComponent', () => {
  let component: PositionBoxComponent;
  let fixture: ComponentFixture<PositionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
