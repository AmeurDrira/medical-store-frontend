import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoComponent } from './endo.component';

describe('EndoComponent', () => {
  let component: EndoComponent;
  let fixture: ComponentFixture<EndoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
