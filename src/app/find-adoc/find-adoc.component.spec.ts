import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindADocComponent } from './find-adoc.component';

describe('FindADocComponent', () => {
  let component: FindADocComponent;
  let fixture: ComponentFixture<FindADocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindADocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindADocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
