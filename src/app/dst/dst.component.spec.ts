import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstComponent } from './dst.component';

describe('DstComponent', () => {
  let component: DstComponent;
  let fixture: ComponentFixture<DstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
