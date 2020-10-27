import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoFranWantComponent } from './who-fran-want.component';

describe('WhoFranWantComponent', () => {
  let component: WhoFranWantComponent;
  let fixture: ComponentFixture<WhoFranWantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoFranWantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoFranWantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
