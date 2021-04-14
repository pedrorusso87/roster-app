import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersLimitComponent } from './players-limit.component';

describe('PlayersLimitComponent', () => {
  let component: PlayersLimitComponent;
  let fixture: ComponentFixture<PlayersLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
