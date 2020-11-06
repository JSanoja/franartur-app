import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorFiccionComponent } from './actor-ficcion.component';

describe('ActorFiccionComponent', () => {
  let component: ActorFiccionComponent;
  let fixture: ComponentFixture<ActorFiccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorFiccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
