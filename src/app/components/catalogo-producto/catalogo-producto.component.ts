import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-catalogo-producto',
  templateUrl: './catalogo-producto.component.html',
  styleUrls: ['./catalogo-producto.component.css']
})
export class CatalogoProductoComponent implements OnInit 
{
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


  clickAddTodo() 
  {
    const auth = getAuth().currentUser?.email;
   // const a = this.auth;
    console.log('email:',auth);

    
  }
}
