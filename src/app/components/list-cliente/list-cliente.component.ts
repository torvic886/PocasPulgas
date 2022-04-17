import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit 
{
  clientes: any[] = [];
  constructor(private _clienteService: EmpleadoService,
    private toastr: ToastrService) 
  { 
    
  }

  ngOnInit(): void 
  {
    this.getClientes()
  }

  getClientes()
  {
    this._clienteService.getCliente().subscribe(data =>
      {
      this.clientes = [];
      data.forEach((element:any) =>
       {
        //console.log(element.payload.doc.id);
       // console.log(element.payload.doc.data());
       this.clientes.push(
         {
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         }
       )
      });
      console.log(this.clientes);
    })
  }

  eliminarCliente(id: string)
  {
    this._clienteService.eliminarCliente(id).then(()=>
    {
      console.log('cliente eliminado con exito');
      this.toastr.error('cliente eliminado con exito','Registro Eliminado!',
      {
positionClass: 'toast-bottom-right'
      });
    }).catch(error =>{
      console.log('error');
    })
  }
}
