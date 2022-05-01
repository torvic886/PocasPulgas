import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService 
{

  constructor(private firestore: AngularFirestore) { }

  agregarEmpleado(empleado: any): Promise<any>
  {
    return this.firestore.collection('empleados').add(empleado);
  }
  getEmpleado(): Observable<any> 
  {
    return this.firestore.collection('empleados', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  eliminarEmpleado(id: string): Promise <any> 
  {
    return this.firestore.collection('empleados').doc(id).delete();
  }
  getEmpleado_(id: string): Observable<any>
  {
    return this.firestore.collection('empleados').doc(id).snapshotChanges();
  }
  actualizarEmpleado(id: string, data:any): Promise<any>
  {
    return this.firestore.collection('empleados').doc(id).update(data);
  }
// Crud Cliente
  agregarCliente(cliente: any): Promise<any>
  {
    return this.firestore.collection('clientes').add(cliente);
  }
  getCliente(): Observable<any> 
  {
    return this.firestore.collection('clientes', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  eliminarCliente(id: string): Promise <any> 
  {
    return this.firestore.collection('clientes').doc(id).delete();
  }
  getCliente_(id: string): Observable<any>
  {
    return this.firestore.collection('clientes').doc(id).snapshotChanges();
  }
  getClientex_(): Observable<any>
  {
    return this.firestore.collection('clientes').snapshotChanges();
  }
  actualizarCliente(id: string, data:any): Promise<any>
  {
    return this.firestore.collection('clientes').doc(id).update(data);
  }

  // Crud Mascota
  agregarMascota(mascota: any): Promise<any>
  {
    return this.firestore.collection('mascotas').add(mascota);
  }
  getMascota(): Observable<any> 
  {
    return this.firestore.collection('mascotas', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  eliminarMascota(id: string): Promise <any> 
  {
    return this.firestore.collection('mascotas').doc(id).delete();
  }
  getMascota_(id: string): Observable<any>
  {
    return this.firestore.collection('mascotas').doc(id).snapshotChanges();
  }
  actualizarMascota(id: string, data:any): Promise<any>
  {
    return this.firestore.collection('mascotas').doc(id).update(data);
  }

   // Crud Producto
  agregarProducto(producto: any): Promise<any>
  {
    return this.firestore.collection('productos').add(producto);
  }
  getProducto(): Observable<any> 
  {
    return this.firestore.collection('productos', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  eliminarProducto(id: string): Promise <any> 
  {
    return this.firestore.collection('productos').doc(id).delete();
  }
  getProducto_(id: string): Observable<any>
  {
    return this.firestore.collection('productos').doc(id).snapshotChanges();
  }
  actualizarProducto(id: string, data:any): Promise<any>
  {
    return this.firestore.collection('productos').doc(id).update(data);
  }

   // Crud Servicio
   agregarServicio(servicio: any): Promise<any>
   {
     return this.firestore.collection('servicios').add(servicio);
   }
   getServicio(): Observable<any> 
   {
     return this.firestore.collection('servicios', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
   }
 
   eliminarServicio(id: string): Promise <any> 
   {
     return this.firestore.collection('servicios').doc(id).delete();
   }
   getServicio_(id: string): Observable<any>
   {
     return this.firestore.collection('servicios').doc(id).snapshotChanges();
   }
   actualizarServicio(id: string, data:any): Promise<any>
   {
     return this.firestore.collection('servicios').doc(id).update(data);
   }

   // Crud Articulo
   agregarArticulo(articulo: any): Promise<any>
   {
     return this.firestore.collection('articulos').add(articulo);
   }
   getArticulo(): Observable<any> 
   {
     return this.firestore.collection('articulos', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
   }
 
   eliminarArticulo(id: string): Promise <any> 
   {
     return this.firestore.collection('articulos').doc(id).delete();
   }
   getArticulo_(id: string): Observable<any>
   {
     return this.firestore.collection('articulos').doc(id).snapshotChanges();
   }
   actualizarArticulo(id: string, data:any): Promise<any>
   {
     return this.firestore.collection('articulos').doc(id).update(data);
   }
 

}
