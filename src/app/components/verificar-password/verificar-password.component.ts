import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-verificar-password',
  templateUrl: './verificar-password.component.html',
  styleUrls: ['./verificar-password.component.css']
})
export class VerificarPasswordComponent implements OnInit 
{
  verificarForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private _errorService: ErrorService)
  { 
    this.verificarForm = this.fb.group({
      usuario: ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  recuperarPassword()
  {
    //obtener correo
    const correo = this.verificarForm.get('usuario')?.value;

    this.loading = true;
    this.afAuth.sendPasswordResetEmail(correo).then (() =>{
      this.toastr.info('Enviamos un correo electronico para restablecer su password','Restablecer password');
      this.router.navigate(['/login']);
    } ).catch(error => 
      {
        this.loading = false;
      this.toastr.error(this._errorService.error(error.code),"Error");
      this.verificarForm.reset();
    })
    
  }

}
