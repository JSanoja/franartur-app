import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDialogComponent } from './bio-dialog.component';

describe('BioDialogComponent', () => {
  let component: BioDialogComponent;
  let fixture: ComponentFixture<BioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
