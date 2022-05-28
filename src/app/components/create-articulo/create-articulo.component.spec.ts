/* 

import { TestBed } from '@angular/core/testing';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { HttpClient } from '@angular/common/http';
import { CreateArticuloComponent } from './create-articulo.component';

describe('EmpleadoService', () => {
    let service: EmpleadoService;
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
            EmpleadoService,
          {
            provide: HttpClient,
            useClass: CreateArticuloComponent
          }
        ]
      });
      service = TestBed.get(EmpleadoService);
    });
    it('should create', () => {
      expect(service).toBeTruthy();
    });
  }); */