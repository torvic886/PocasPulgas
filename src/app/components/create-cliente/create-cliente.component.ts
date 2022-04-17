import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit 
{
  createCliente: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Cliente';

  constructor(private fb: FormBuilder,
    private clienteService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute)
    {
    this.createCliente = this.fb.group(
      {
      
      nombre: ['', Validators.required],
      documento: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void 
  {
    this.isEditar();
  }

  agregarEditarCliente() 
  {
    this.submitted = true;

    if (this.createCliente.invalid) 
    {
      return;
    }

    if (this.id === null)
    {
      this.agregarCliente();
    } 
    else 
    {
      this.editarCliente(this.id);
    }

  }

  agregarCliente()
  {
    this.titulo = 'Agregar Cliente';
    const cliente: any = 
    {
      nombre : this.createCliente.value.nombre,
      documento: this.createCliente.value.documento,
      direccion: this.createCliente.value.direccion,
      correo: this.createCliente.value.correo,
      fechaCreacion : new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this.clienteService.agregarCliente(cliente).then(() => 
    {
      this.toastr.success('El Cliente se registro con exito!', 'Cliente Registrado', { positionClass: 'toast-bottom-right' });
      this.loading = false;
      this.router.navigate(['/list-cliente']);

    }).catch(error => 
      {
      console.log(error);
      this.loading = false;
    })

    console.log(cliente);

  }

  editarCliente(id: string)
  {
    const cliente: any = 
    {
      nombre: this.createCliente.value.nombre,
      documento: this.createCliente.value.documento,
      direccion: this.createCliente.value.direccion,
      correo: this.createCliente.value.correo,
      fechaActualizacion: new Date()
    }


    this.loading = true;
    this.clienteService.actualizarCliente(id,cliente).then(()=>
    {
      this.loading = false;
      this.toastr.info('El Cliente fue modificado con exito', 'Cliente modificado!', 
      {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-cliente']);
    });
  }

  isEditar() 
  {
    console.log('id: '+this.id)
    if (this.id !== null)
    {
      this.titulo = 'Editar Cliente';
      this.loading = true;
      this.clienteService.getCliente_(this.id).subscribe(data => 
      {
        
        this.loading = false;
       
        this.createCliente.setValue(
          {
          nombre: data.payload.data()['nombre'],
          documento: data.payload.data()['documento'],
          direccion: data.payload.data()['direccion'],
          correo: data.payload.data()['correo']

        })
      })
    }
  }

}
