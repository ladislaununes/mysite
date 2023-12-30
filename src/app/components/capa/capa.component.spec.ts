import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaComponent } from './capa.component';

describe('CapaComponent', () => {
  let component: CapaComponent;
  let fixture: ComponentFixture<CapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
