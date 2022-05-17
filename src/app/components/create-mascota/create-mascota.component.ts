import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-mascota',
  templateUrl: './create-mascota.component.html',
  styleUrls: ['./create-mascota.component.css']
})
export class CreateMascotaComponent implements OnInit 
{
  createMascota: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Mascota';

  constructor(private fb: FormBuilder,
    private mascotaService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute)
    {
    this.createMascota = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      color: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
   // console.log(this.id)
  }

  ngOnInit(): void 
  {
    this.isEditar();
  }

  agregarEditarMascota() 
  {
    this.submitted = true;

    if (this.createMascota.invalid) 
    {
      return;
    }

    if (this.id === null)
    {
      this.agregarMascota();
    } 
    else 
    {
      this.editarMascota(this.id);
    }

  }

  agregarMascota()
  {
    this.titulo = 'Agregar Mascota';
    const mascota: any = {
      nombre: this.createMascota.value.nombre,
      tipo: this.createMascota.value.tipo,
      color: this.createMascota.value.color,
      fechaNacimiento: this.createMascota.value.fechaNacimiento,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this.mascotaService.agregarMascota(mascota).then(() => 
    {
      this.toastr.success('La Mascota se registro con exito!', 'Mascota Registrada', 
      { positionClass: 'toast-bottom-right' });
      this.loading = false;
      this.router.navigate(['/list-mascota']);

    }).catch(error => {
     // console.log(error);
      this.loading = false;
    })

    //console.log(mascota);

  }

  editarMascota(id: string)
  {
    const mascota: any = {
      nombre: this.createMascota.value.nombre,
      tipo: this.createMascota.value.tipo,
      color: this.createMascota.value.color,
      fechaNacimiento: this.createMascota.value.fechaNacimiento,
      fechaActualizacion: new Date()
    }


    this.loading = true;
    this.mascotaService.actualizarMascota(id,mascota).then(()=>{
      this.loading = false;
      this.toastr.info('La mascota fue modificada con exito', 'Mascota modificada!', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-mascota']);
    });
  }

  isEditar() 
  {
    
    if (this.id !== null)
    {
      this.titulo = 'Editar Mascota';
      this.loading = true;
      this.mascotaService.getMascota_(this.id).subscribe(data => 
      {
        
        this.loading = false;
        //console.log(data.payload.data()['nombre']);
        this.createMascota.setValue({
          nombre: data.payload.data()['nombre'],
          tipo: data.payload.data()['tipo'],
          color: data.payload.data()['color'],
          fechaNacimiento: data.payload.data()['fechaNacimiento']

        })
      })
    }
  }
}
