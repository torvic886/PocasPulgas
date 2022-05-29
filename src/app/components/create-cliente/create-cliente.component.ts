import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppModule } from 'src/app/app.module';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
/* @Injectable({ providedIn: AppModule}) */
export class CreateClienteComponent implements OnInit {
  createCliente: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Cliente';

  //Esto es una prueba CI, CD Firebase Pocas Pulgas

  constructor(private fb: FormBuilder,
    private clienteService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createCliente = this.fb.group(
      {
        nombre: ['', Validators.required],
        documento: ['', Validators.required],
        direccion: ['', Validators.required],
        correo: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repetirPassword: ['', Validators.required],
      }, { validator: this.checkPassword })

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isEditar();
  }

  agregarEditarCliente() {
    this.submitted = true;

    if (this.createCliente.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarCliente();
    }
    else {
      this.editarCliente(this.id);
    }

  }

  checkPassword(group: FormGroup): any 
  {
    const pass = group.controls.password?.value;
    const confirmPassword = group.controls.repetirPassword?.value;
    return pass === confirmPassword ? null :
      { notSame: true }
  }

  agregarCliente() {
    this.titulo = 'Agregar Cliente';
    const cliente: any =
    {
      nombre: this.createCliente.value.nombre,
      documento: this.createCliente.value.documento,
      direccion: this.createCliente.value.direccion,
      correo: this.createCliente.value.correo,
      password: this.createCliente.value.password,
      repetirPassword: this.createCliente.value.password,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this.clienteService.agregarCliente(cliente).then(() => {
      this.toastr.success('El Cliente se registro con exito!', 'Cliente Registrado', { positionClass: 'toast-bottom-right' });
      this.loading = false;
      this.router.navigate(['/list-cliente']);

    }).catch(error => {
      this.loading = false;
    })
  }

  editarCliente(id: string) {
    const cliente: any =
    {
      nombre: this.createCliente.value.nombre,
      documento: this.createCliente.value.documento,
      direccion: this.createCliente.value.direccion,
      correo: this.createCliente.value.correo,
      password: this.createCliente.value.password,
      repetirPassword: this.createCliente.value.password,
      fechaActualizacion: new Date()
    }


    this.loading = true;
    this.clienteService.actualizarCliente(id, cliente).then(() => {
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
            correo: data.payload.data()['correo'],
            password: data.payload.data()['password'],
            repetirPassword: data.payload.data()['password']
        })
      })
    }
  }
}
