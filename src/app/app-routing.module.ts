import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { CatalogoProductoComponent } from './components/catalogo-producto/catalogo-producto.component';
//import { LoginComponent } from './components/login/login.component';
import { VerificarPasswordComponent } from './components/verificar-password/verificar-password.component';
//import { RegisterComponent } from './components/register/register.component';
import { LoginInicioComponent } from './components/login-inicio/login-inicio.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { CreateMascotaComponent } from './components/create-mascota/create-mascota.component';
import { ListMascotaComponent } from './components/list-mascota/list-mascota.component';
import { ListProductoComponent } from './components/list-producto/list-producto.component';
import { CreateProductoComponent } from './components/create-producto/create-producto.component';
import { CreateServicioComponent } from './components/create-servicio/create-servicio.component';
import { ListServicioComponent } from './components/list-servicio/list-servicio.component';
import { CreateArticuloComponent } from './components/create-articulo/create-articulo.component';
import { ListArticuloComponent } from './components/list-articulo/list-articulo.component';
import { CarritoComponent } from './components/carrito/carrito.component';



const routes: Routes = [
  
  {path: '', component: CatalogoProductoComponent },
  { path: '', redirectTo: 'catalogo-producto', pathMatch: 'full' },
  {path: 'administracion',component: AdministracionComponent},
  { path: 'list-articulo', component: ListArticuloComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'list-empleado', component: ListEmpleadoComponent },
  {path: 'list-cliente', component: ListClienteComponent},
  {path: 'list-mascota', component: ListMascotaComponent},
  {path: 'list-producto', component: ListProductoComponent},
  {path: 'list-servicio', component: ListServicioComponent},
  { path: 'create-articulo', component: CreateArticuloComponent },
  { path: 'create-empleado', component: CreateEmpleadoComponent },
  { path: 'create-cliente', component: CreateClienteComponent },
  { path: 'create-mascota', component: CreateMascotaComponent },
  { path: 'create-mascota', component: CreateMascotaComponent },
  { path: 'create-producto', component: CreateProductoComponent },
  { path: 'create-servicio', component: CreateServicioComponent },
  { path: 'catalogo-producto', component: CatalogoProductoComponent },
  { path: 'login-inicio', component: LoginInicioComponent },
  { path: 'registerUser', component: RegisterUserComponent},
  { path: 'verificarCorreo', component: VerificarCorreoComponent },
  { path: 'verificar-password', component: VerificarPasswordComponent },
  { path: 'editArticulo/:id', component: CreateArticuloComponent },
  { path: 'editEmpleado/:id', component: CreateEmpleadoComponent },
  {path: 'editCliente/:id', component: CreateClienteComponent},
  {path: 'editMascota/:id', component: CreateMascotaComponent},
  {path: 'editProducto/:id', component: CreateProductoComponent},
  {path: 'editServicio/:id', component: CreateServicioComponent},
  { path: '', redirectTo: 'catalogo-producto', pathMatch: 'full' },
  { path: '**', redirectTo: 'catalogo-producto', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{ 

}
//prueba sourceTree