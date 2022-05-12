import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { getAuth } from "firebase/auth";
import { LoginInicioComponent } from '../login-inicio/login-inicio.component';

@Component({
  selector: 'app-catalogo-producto',
  templateUrl: './catalogo-producto.component.html',
  styleUrls: ['./catalogo-producto.component.css']
})
export class CatalogoProductoComponent implements OnInit 
{


  @ViewChild(LoginInicioComponent) child: LoginInicioComponent;

  loading = false;
 
  constructor(private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _errorService: ErrorService) 
  { 
  }

  ngOnInit(): void 
  {
    
  }

  saludo()
  {
    console.log('POKM:',this.child.saludo);
    //this.child.viewCliente();
  }




}
