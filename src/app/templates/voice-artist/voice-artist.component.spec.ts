import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceArtistComponent } from './voice-artist.component';

describe('VoiceArtistComponent', () => {
  let component: VoiceArtistComponent;
  let fixture: ComponentFixture<VoiceArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
