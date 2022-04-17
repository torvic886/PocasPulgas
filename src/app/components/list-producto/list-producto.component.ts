import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit
 {
  productos: any[] = [];
  constructor(private _productoService: EmpleadoService,
    private toastr: ToastrService) 
  { 
    
  }

  ngOnInit(): void 
  {
    this.getProductos()
  }

  getProductos()
  {
    this._productoService.getProducto().subscribe(data =>{
      this.productos = [];
      data.forEach((element:any) =>
       {
        //console.log(element.payload.doc.id);
       // console.log(element.payload.doc.data());
       this.productos.push(
         {
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         }
       )
      });
      console.log(this.productos);
    })
  }

  eliminarProducto(id: string)
  {
    this._productoService.eliminarProducto(id).then(()=>
    {
      console.log('producto eliminado con exito');
      this.toastr.error('producto eliminado con exito','Registro Eliminado!',
      {
positionClass: 'toast-bottom-right'
      });
    }).catch(error =>{
      console.log('error');
    })
  }

}
