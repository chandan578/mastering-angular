import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Veriables } from './veriables';

describe('Veriables', () => {
  let component: Veriables;
  let fixture: ComponentFixture<Veriables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Veriables],
    }).compileComponents();

    fixture = TestBed.createComponent(Veriables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
