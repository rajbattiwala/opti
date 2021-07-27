import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalMasterComponent } from './metal-master.component';

describe('MetalMasterComponent', () => {
  let component: MetalMasterComponent;
  let fixture: ComponentFixture<MetalMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
