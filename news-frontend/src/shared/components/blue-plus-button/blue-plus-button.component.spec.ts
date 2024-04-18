import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluePlusButtonComponent } from './blue-plus-button.component';

describe('BluePlusButtonComponent', () => {
  let component: BluePlusButtonComponent;
  let fixture: ComponentFixture<BluePlusButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BluePlusButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BluePlusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
