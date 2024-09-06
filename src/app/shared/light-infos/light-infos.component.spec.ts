import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightInfosComponent } from './light-infos.component';

describe('LightInfosComponent', () => {
  let component: LightInfosComponent;
  let fixture: ComponentFixture<LightInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightInfosComponent]
    });
    fixture = TestBed.createComponent(LightInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
