import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;


  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private _errorService: ErrorService,
    private toastr: ToastrService,
    private router: Router) {

    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }
  login() {
    console.log(this.loginForm)
    const usuario = this.loginForm.get('usuario')?.value;
    const password = this.loginForm.get('password')?.value;

    this.loading = true;

    this.afAuth.signInWithEmailAndPassword(usuario, password).then((respuesta) =>
     {
      console.log(respuesta);

      if (respuesta.user?.emailVerified == false) 
      {
        this.router.navigate(['/verificarCorreo'])
      }
      else 
      {

      }

      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error)
      this.toastr.error(this._errorService.error(error.code), 'Error')
      this.loginForm.reset();

    }
    )
  }


}
