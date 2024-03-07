import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtheseComponent } from './prothese.component';

describe('ProtheseComponent', () => {
  let component: ProtheseComponent;
  let fixture: ComponentFixture<ProtheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtheseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
