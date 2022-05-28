/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateClienteComponent } from './create-cliente.component';

describe('CreateClienteComponent', () => {
  let component: CreateClienteComponent;
  let fixture: ComponentFixture<CreateClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        { provide: 
        AngularFirestore, },
        FormsModule,               // << ----- add this line
        ReactiveFormsModule
      ],
      declarations: [ CreateClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeUndefined();

  });
}); */


/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateClienteComponent } from './create-cliente.component';

describe('CreateClienteComponent', () => {
  let component: CreateClienteComponent;
  let fixture: ComponentFixture<CreateClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,               // << ----- add this line
        ReactiveFormsModule
      ],
      declarations: [ CreateClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */