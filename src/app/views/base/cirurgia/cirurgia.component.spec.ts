import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirurgiaComponent } from './cirurgia.component';

describe('CirurgiaComponent', () => {
  let component: CirurgiaComponent;
  let fixture: ComponentFixture<CirurgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirurgiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CirurgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
