import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPeperoniComponent } from './detailPepperoni.component';

describe('DetailPeperoniComponent', () => {
  let component: DetailPeperoniComponent;
  let fixture: ComponentFixture<DetailPeperoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPeperoniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPeperoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
