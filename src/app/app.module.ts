import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogoProductoComponent } from './components/catalogo-producto/catalogo-producto.component';
import { LoginComponent } from './components/login/login.component';
import { VerificarPasswordComponent } from './components/verificar-password/verificar-password.component';
import { RegisterComponent } from './components/register/register.component';
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

@NgModule({
  declarations: [
    AppComponent,
    CreateEmpleadoComponent,
    NavbarComponent,
    ListEmpleadoComponent,
    CatalogoProductoComponent,
    LoginComponent,
    VerificarPasswordComponent,
    RegisterComponent,
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
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ScreenTrackingService, UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
