import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDealComponent } from './family-deal.component';

describe('FamilyDealComponent', () => {
  let component: FamilyDealComponent;
  let fixture: ComponentFixture<FamilyDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyDealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
