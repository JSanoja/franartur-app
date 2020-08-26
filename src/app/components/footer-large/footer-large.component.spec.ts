import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLargeComponent } from './footer-large.component';

describe('FooterLargeComponent', () => {
  let component: FooterLargeComponent;
  let fixture: ComponentFixture<FooterLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
