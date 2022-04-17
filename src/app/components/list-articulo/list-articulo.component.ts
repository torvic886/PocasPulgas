import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-articulo',
  templateUrl: './list-articulo.component.html',
  styleUrls: ['./list-articulo.component.css']
})
export class ListArticuloComponent implements OnInit 
{
  articulos: any[] = [];
  constructor(private _articuloService: EmpleadoService,
    private toastr: ToastrService) 
  { 
    
  }

  ngOnInit(): void 
  {
    this.getArticulos()
  }

  getArticulos()
  {
    this._articuloService.getArticulo().subscribe(data =>
      {
      this.articulos = [];
      data.forEach((element:any) =>
       {
        //console.log(element.payload.doc.id);
       // console.log(element.payload.doc.data());
       this.articulos.push(
         {
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         }
       )
      });
      console.log(this.articulos);
    })
  }

  eliminarArticulo(id: string)
  {
    this._articuloService.eliminarArticulo(id).then(()=>
    {
      console.log('articulo eliminado con exito');
      this.toastr.error('articulo eliminado con exito','Articulo Eliminado!',
      {
positionClass: 'toast-bottom-right'
      });
    }).catch(error =>{
      console.log('error');
    })
  }

}
