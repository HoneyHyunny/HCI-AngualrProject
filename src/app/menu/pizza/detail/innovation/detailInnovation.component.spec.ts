import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInnovationComponent } from './detailInnovation.component';

describe('DetailInnovationComponent', () => {
  let component: DetailInnovationComponent;
  let fixture: ComponentFixture<DetailInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInnovationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
