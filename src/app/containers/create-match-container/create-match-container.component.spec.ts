import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMatchContainerComponent } from './create-match-container.component';

describe('CreateMatchContainerComponent', () => {
  let component: CreateMatchContainerComponent;
  let fixture: ComponentFixture<CreateMatchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMatchContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMatchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
