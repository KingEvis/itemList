import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddComponent } from './itemAdd.component';

describe('PridetiPrekesComponent', () => {
  let component: ItemAddComponent;
  let fixture: ComponentFixture<ItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
