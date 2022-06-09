import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogoProductoComponent } from './components/catalogo-producto/catalogo-producto.component';
import { VerificarPasswordComponent } from './components/verificar-password/verificar-password.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { LoginInicioComponent } from './components/login-inicio/login-inicio.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { CreateMascotaComponent } from './components/create-mascota/create-mascota.component';
import { ListMascotaComponent } from './components/list-mascota/list-mascota.component';
import { CreateProductoComponent } from './components/create-producto/create-producto.component';
import { ListProductoComponent } from './components/list-producto/list-producto.component';
import { CreateServicioComponent } from './components/create-servicio/create-servicio.component';
import { ListServicioComponent } from './components/list-servicio/list-servicio.component';
import { CreateArticuloComponent } from './components/create-articulo/create-articulo.component';
import { ListArticuloComponent } from './components/list-articulo/list-articulo.component';
import { FormBuilder } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmpleadoService } from './services/empleado.service';
import { CarritoComponent } from './components/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateEmpleadoComponent,
    NavbarComponent,
    ListEmpleadoComponent,
    CatalogoProductoComponent,
    VerificarPasswordComponent,
    SpinnerComponent,
    ListClienteComponent,
    CreateClienteComponent,
    LoginInicioComponent,
    VerificarCorreoComponent,
    RegisterUserComponent,
    AdministracionComponent,
    Navbar2Component,
    CreateMascotaComponent,
    ListMascotaComponent,
    CreateProductoComponent,
    ListProductoComponent,
    CreateServicioComponent,
    ListServicioComponent,
    CreateArticuloComponent,
    ListArticuloComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [
    ScreenTrackingService, 
    UserTrackingService,
    FormBuilder,
    EmpleadoService,
    AngularFireModule,
    AngularFirestore

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
