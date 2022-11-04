import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecommendedComponent } from './detailRecommended.component';

describe('DetailRecommendedComponent', () => {
  let component: DetailRecommendedComponent;
  let fixture: ComponentFixture<DetailRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRecommendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
