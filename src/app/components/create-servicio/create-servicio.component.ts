import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-servicio',
  templateUrl: './create-servicio.component.html',
  styleUrls: ['./create-servicio.component.css']
})
export class CreateServicioComponent implements OnInit {

  createServicio: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Servicio';

  constructor(private fb: FormBuilder,
    private servicioService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute)
    {
    this.createServicio = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
   // console.log(this.id)
  }

  ngOnInit(): void 
  {
    this.isEditar();
  }

  agregarEditarServicio() 
  {
    this.submitted = true;

    if (this.createServicio.invalid) 
    {
      return;
    }

    if (this.id === null)
    {
      this.agregarServicio();
    } 
    else 
    {
      this.editarServicio(this.id);
    }

  }

  agregarServicio()
  {
    this.titulo = 'Agregar Servicio';
    const servicio: any = {
      nombre: this.createServicio.value.nombre,
      precio: this.createServicio.value.precio,
      descripcion: this.createServicio.value.descripcion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this.servicioService.agregarServicio(servicio).then(() => 
    {
      this.toastr.success('El Servicio se registro con exito!', 'Servicio Registrado', 
      { positionClass: 'toast-bottom-right' });
      this.loading = false;
      this.router.navigate(['/list-servicio']);

    }).catch(error => {
      console.log(error);
      this.loading = false;
    })

    console.log(servicio);

  }

  editarServicio(id: string)
  {
    const servicio: any = 
    {
      nombre: this.createServicio.value.nombre,
      precio: this.createServicio.value.precio,
      descripcion: this.createServicio.value.descripcion,
      fechaActualizacion: new Date()
    }


    this.loading = true;
    this.servicioService.actualizarServicio(id,servicio).then(()=>{
      this.loading = false;
      this.toastr.info('El Servicio fue modificado con exito', 'Servicio modificado!', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-servicio']);
    });
  }

  isEditar() 
  {
    
    if (this.id !== null)
    {
      this.titulo = 'Editar Servicio';
      this.loading = true;
      this.servicioService.getServicio_(this.id).subscribe(data => 
      {
        
        this.loading = false;
        console.log(data.payload.data()['nombre']);
        this.createServicio.setValue({
          nombre: data.payload.data()['nombre'],
          precio: data.payload.data()['precio'],
          descripcion: data.payload.data()['descripcion']

        })
      })
    }
  }
}
