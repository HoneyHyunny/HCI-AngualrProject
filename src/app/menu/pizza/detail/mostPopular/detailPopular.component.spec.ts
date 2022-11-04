import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPopularComponent } from './detailPopular.component';

describe('DetailPopularComponent', () => {
  let component: DetailPopularComponent;
  let fixture: ComponentFixture<DetailPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPopularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
