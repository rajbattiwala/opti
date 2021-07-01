import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMasterRegisterComponent } from './item-master-register.component';

describe('ItemMasterRegisterComponent', () => {
  let component: ItemMasterRegisterComponent;
  let fixture: ComponentFixture<ItemMasterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMasterRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMasterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
