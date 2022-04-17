import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login-inicio',
  templateUrl: './login-inicio.component.html',
  styleUrls: ['./login-inicio.component.css']
})
export class LoginInicioComponent implements OnInit {
  loginInicioForm: FormGroup;
  loading = false;
  titulo = 'Agregar Empleado';
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private _errorService: ErrorService,
    private toastr: ToastrService,
    private router: Router) {
    this.loginInicioForm =
      this.fb.group
        ({
          usuario: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
        })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginInicioForm)
    const usuario = this.loginInicioForm.get('usuario')?.value;
    const password = this.loginInicioForm.get('password')?.value;

    this.loading = true;

    this.afAuth.signInWithEmailAndPassword(usuario, password).then((respuesta) => {
      console.log("usuario: " + usuario);

      if (usuario == 'vagutierrezv@uqvirtual.edu.co') 
      {
        this.router.navigate(['/administracion'])
        console.log('ENTRAAA')
      }

      if (respuesta.user?.emailVerified == false) 
      {
        this.router.navigate(['/verificarCorreo'])
      }
      if (usuario != 'vagutierrezv@uqvirtual.edu.co') 
      {
        this.router.navigate(['/catalogo-producto'])
        console.log('ENTRAAA')
      }
      
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error)
      this.toastr.error(this._errorService.error(error.code), 'Error')
      this.loginInicioForm.reset();

    }
    )
  }

  login2() {

    const usuario = this.loginInicioForm.get('usuario')?.value;
    const password = this.loginInicioForm.get('password')?.value;

    this.loading = true;



    this.afAuth.signInWithEmailAndPassword(usuario, password).then((respuesta) => {
      console.log(respuesta.user?.displayName);

      /*   if(respuesta.user?.displayName == "vagutierrezv@uqvirtual.edu.co")
         {
           this.router.navigate(['/list-empleado'])
         } */

      if (respuesta.user?.emailVerified == false) {
        this.router.navigate(['/catalogo-producto'])
      }

      else {

      }

      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error)
      this.toastr.error(this._errorService.error(error.code), 'Error')
      this.loginInicioForm.reset();

    }
    )

  }

}
