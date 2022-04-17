import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-mascota',
  templateUrl: './list-mascota.component.html',
  styleUrls: ['./list-mascota.component.css']
})
export class ListMascotaComponent implements OnInit 
{
  mascotas: any[] = [];
  constructor(private _mascotaService: EmpleadoService,
    private toastr: ToastrService) 
  { 
    
  }

  ngOnInit(): void 
  {
    this.getMascotas()
  }

  getMascotas()
  {
    this._mascotaService.getMascota().subscribe(data =>{
      this.mascotas = [];
      data.forEach((element:any) =>
       {
        //console.log(element.payload.doc.id);
       // console.log(element.payload.doc.data());
       this.mascotas.push(
         {
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         }
       )
      });
      console.log(this.mascotas);
    })
  }

  eliminarMascota(id: string)
  {
    this._mascotaService.eliminarMascota(id).then(()=>{
      console.log('mascota eliminada con exito');
      this.toastr.error('mascota eliminada con exito','Registro Eliminado!',
      {
positionClass: 'toast-bottom-right'
      });
    }).catch(error =>{
      console.log('error');
    })
  }

}
