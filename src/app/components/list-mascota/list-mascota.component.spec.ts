import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMascotaComponent } from './list-mascota.component';

describe('ListMascotaComponent', () => {
  let component: ListMascotaComponent;
  let fixture: ComponentFixture<ListMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
