import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentisteriaComponent } from './dentisteria.component';

describe('DentisteriaComponent', () => {
  let component: DentisteriaComponent;
  let fixture: ComponentFixture<DentisteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentisteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DentisteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
