import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleHeaderComponent } from './title-header.component';

describe('TitleHeaderComponent', () => {
  let component: TitleHeaderComponent;
  let fixture: ComponentFixture<TitleHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleHeaderComponent]
    });
    fixture = TestBed.createComponent(TitleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
