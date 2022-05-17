import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-servicio',
  templateUrl: './list-servicio.component.html',
  styleUrls: ['./list-servicio.component.css']
})
export class ListServicioComponent implements OnInit {

  servicios: any[] = [];
  constructor(private _servicioService: EmpleadoService,
    private toastr: ToastrService) 
  { 
    
  }

  ngOnInit(): void 
  {
    this.getServicios()
  }

  getServicios()
  {
    this._servicioService.getServicio().subscribe(data =>{
      this.servicios = [];
      data.forEach((element:any) =>
       {
        //console.log(element.payload.doc.id);
       // console.log(element.payload.doc.data());
       this.servicios.push(
         {
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         }
       )
      });
     // console.log(this.servicios);
    })
  }

  eliminarServicio(id: string)
  {
    this._servicioService.eliminarServicio(id).then(()=>
    {
      console.log('servicio eliminado con exito');
      this.toastr.error('servicio eliminado con exito','Servicio Eliminado!',
      {
positionClass: 'toast-bottom-right'
      });
    }).catch(error =>{
      console.log('error');
    })
  }
}
