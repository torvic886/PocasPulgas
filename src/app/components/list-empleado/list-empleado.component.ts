import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit 
{
  empleados: any[] = [];
  constructor(private _empleadoService: EmpleadoService,
    private toastr: ToastrService) 
  { 
    
  }

  ngOnInit(): void 
  {
    this.getEmpleados()
  }

  getEmpleados()
  {
    this._empleadoService.getEmpleado().subscribe(data =>{
      this.empleados = [];
      data.forEach((element:any) =>
       {
        //console.log(element.payload.doc.id);
       // console.log(element.payload.doc.data());
       this.empleados.push(
         {
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         }
       )
      });
     // console.log(this.empleados);
    })
  }

  eliminarEmpleado(id: string)
  {
    this._empleadoService.eliminarEmpleado(id).then(()=>{
      console.log('empleado eliminado con exito');
      this.toastr.error('empleado eliminado con exito','Registro Eliminado!',
      {
positionClass: 'toast-bottom-right'
      });
    }).catch(error =>{
      console.log('error');
    })
  }

}
