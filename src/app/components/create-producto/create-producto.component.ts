import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit 
{
  createProducto: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Producto';

  constructor(private fb: FormBuilder,
    private productoService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute)
    {
    this.createProducto = this.fb.group(
      {
      
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      costo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaVencimiento: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    //console.log(this.id)
  }

  ngOnInit(): void 
  {
    this.isEditar();
  }

  agregarEditarProducto() 
  {
    this.submitted = true;

    if (this.createProducto.invalid) 
    {
      return;
    }

    if (this.id === null)
    {
      this.agregarProducto();
    } 
    else 
    {
      this.editarProducto(this.id);
    }

  }

  agregarProducto()
  {
    this.titulo = 'Agregar Producto';
    const producto: any = 
    {
      nombre : this.createProducto.value.nombre,
      tipo: this.createProducto.value.tipo,
      costo: this.createProducto.value.costo,
      descripcion: this.createProducto.value.descripcion,
      fechaVencimiento: this.createProducto.value.fechaVencimiento,
      fechaCreacion : new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this.productoService.agregarProducto(producto).then(() => 
    {
      this.toastr.success('El Producto se registro con exito!', 'Producto Registrado', { positionClass: 'toast-bottom-right' });
      this.loading = false;
      this.router.navigate(['/list-producto']);

    }).catch(error => 
      {
      //console.log(error);
      this.loading = false;
    })

    //console.log(producto);

  }

  editarProducto(id: string)
  {
    const producto: any = 
    {
      nombre: this.createProducto.value.nombre,
      tipo: this.createProducto.value.tipo,
      costo: this.createProducto.value.costo,
      descripcion: this.createProducto.value.descripcion,
      fechaVencimiento: this.createProducto.value.fechaVencimiento,
      fechaActualizacion: new Date()
    }


    this.loading = true;
    this.productoService.actualizarProducto(id,producto).then(()=>
    {
      this.loading = false;
      this.toastr.info('El Producto fue modificado con exito', 'Producto modificado!', 
      {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-producto']);
    });
  }

  isEditar() 
  {
    //console.log('id: '+this.id)
    if (this.id !== null)
    {
      this.titulo = 'Editar Producto';
      this.loading = true;
      this.productoService.getProducto_(this.id).subscribe(data => 
      {
        
        this.loading = false;
       
        this.createProducto.setValue(
          {
          nombre: data.payload.data()['nombre'],
          tipo: data.payload.data()['tipo'],
          costo: data.payload.data()['costo'],
          descripcion: data.payload.data()['descripcion'],
          fechaVencimiento: data.payload.data()['fechaVencimiento']

        })
      })
    }
  }

}
