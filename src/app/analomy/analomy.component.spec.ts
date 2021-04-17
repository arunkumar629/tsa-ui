import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalomyComponent } from './analomy.component';

describe('AnalomyComponent', () => {
  let component: AnalomyComponent;
  let fixture: ComponentFixture<AnalomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalomyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
