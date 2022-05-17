import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-articulo',
  templateUrl: './create-articulo.component.html',
  styleUrls: ['./create-articulo.component.css']
})
export class CreateArticuloComponent implements OnInit {

  createArticulo: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Articulo';
  titulo2 = '';

  constructor(private fb: FormBuilder,
    private articuloService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute)
    {
    this.createArticulo = this.fb.group(
    {
      
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required],
      tipo: ['', Validators.required],
      imagen: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
   // console.log(this.id)
  }

  ngOnInit(): void 
  {
    this.isEditar();
  }

  agregarEditarArticulo() 
  {
    this.submitted = true;

    if (this.createArticulo.invalid) 
    {
      return;
    }

    if (this.id === null)
    {
      this.agregarArticulo();
    } 
    else 
    {
      this.editarArticulo(this.id);
    }

  }

  agregarArticulo()
  {
    this.titulo = 'Agregar Articulo';
    const articulo: any = 
    {
      nombre : this.createArticulo.value.nombre,
      precio: this.createArticulo.value.precio,
      descripcion: this.createArticulo.value.descripcion,
      cantidad: this.createArticulo.value.cantidad,
      tipo: this.createArticulo.value.tipo,
      imagen: this.createArticulo.value.imagen,
      fechaCreacion : new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;

    this.articuloService.agregarArticulo(articulo).then(() => 
    {
      this.toastr.success('El Articulo se registro con exito!', 'Articulo Registrado', { positionClass: 'toast-bottom-right' });
      this.loading = false;
      this.router.navigate(['/list-articulo']);
      

    }).catch(error => 
      {
     // console.log(error);
      this.loading = false;
    })

    //console.log(articulo);
    


  }


  editarArticulo(id: string)
  {
    const articulo: any = 
    {
      nombre: this.createArticulo.value.nombre,
      precio: this.createArticulo.value.precio,
      descripcion: this.createArticulo.value.descripcion,
      cantidad: this.createArticulo.value.cantidad,
      tipo: this.createArticulo.value.tipo,
      imagen: this.createArticulo.value.imagen,
      fechaActualizacion: new Date()
    }
    

    this.loading = true;
    this.articuloService.actualizarArticulo(id,articulo).then(()=>
    {
      this.loading = false;
      this.toastr.info('El Articulo fue modificado con exito', 'Articulo modificado!', 
      {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-articulo']);
    });
  }

  isEditar() 
  {
    //console.log('id: '+this.id)
    if (this.id !== null)
    {
      this.titulo = 'Editar Articulo';
      this.loading = true;
      this.articuloService.getArticulo_(this.id).subscribe(data => 
      {
        
        this.loading = false;
       
        this.createArticulo.setValue(
          {
          nombre: data.payload.data()['nombre'],
          precio: data.payload.data()['precio'],
          descripcion: data.payload.data()['descripcion'],
          cantidad: data.payload.data()['cantidad'],
          tipo: data.payload.data()['tipo'],
          imagen: data.payload.data()['imagen']

        })
      })
    }
  }

}
