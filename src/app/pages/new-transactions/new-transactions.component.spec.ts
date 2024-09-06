import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionsComponent } from './new-transactions.component';

describe('NewTransactionsComponent', () => {
  let component: NewTransactionsComponent;
  let fixture: ComponentFixture<NewTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTransactionsComponent]
    });
    fixture = TestBed.createComponent(NewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
