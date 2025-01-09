import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShowComponent } from './itemShow.component';

describe('VaizduotiPrekesComponent', () => {
  let component: ItemShowComponent;
  let fixture: ComponentFixture<ItemShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
