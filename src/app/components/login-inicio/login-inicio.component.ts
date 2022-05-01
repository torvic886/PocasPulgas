import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ErrorService } from 'src/app/services/error.service';
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { AngularFireModule } from '@angular/fire/compat';
import { Cliente } from 'src/app/models/Cliente';
import { Observable } from 'rxjs';
import { cliente } from 'src/app/Interface/cliente';
import { getAuth } from "firebase/auth";




@Component({
  selector: 'app-login-inicio',
  templateUrl: './login-inicio.component.html',
  styleUrls: ['./login-inicio.component.css']
})
export class LoginInicioComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<cliente>;
  items: Observable<cliente[]>;

  loginInicioForm: FormGroup;
  loading = false;
  titulo = 'Agregar Empleado';
  empleados: any[] = [];
  flag = true;

  constructor(private fb: FormBuilder,
    private db: AngularFireModule,
    private afAuth: AngularFireAuth,
    private _errorService: ErrorService,
    private _empleadoService: EmpleadoService,
    private toastr: ToastrService,
    private afs: AngularFirestore,
    private router: Router) {

    this.loginInicioForm =
      this.fb.group
        ({
          usuario: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
        })
    this.itemsCollection = afs.collection<cliente>('clientes');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit(): void {
  }

  login() {
    const usuario = this.loginInicioForm.get('usuario')?.value;
    const password = this.loginInicioForm.get('password')?.value;
    const auth = getAuth();
    const user = auth.currentUser;

    this.afs.collection('clientes', ref => ref.where('correo', '==', usuario)).snapshotChanges().subscribe((element) => {
      this.empleados = [];
      element.forEach((datosTarea: any) => {
        this.empleados.push({
          id: datosTarea.payload.doc.id,
          correo: datosTarea.payload.doc.data().correo,
          password: datosTarea.payload.doc.data().password
        });
        if (usuario == this.empleados[0].correo) {
          this.router.navigate(['/catalogo-producto'])
        }
        else {
          this.loginInicioForm.reset();
        }
        this.loading = false;

      })
    })

    if ((usuario == user?.email) && (this.flag == user?.emailVerified) && (user !== null)) {

      this.router.navigate(['/administracion'])
    }
    else {
      // this.toastr.warning('Intente de nuevo!', 'Usuario Invalido!');
      this.loginInicioForm.reset();
    }

  }




/*
  login2() {
    const usuario = this.loginInicioForm.get('usuario')?.value;
    const password = this.loginInicioForm.get('password')?.value;

    this.loading = true;

    this.afAuth.signInWithEmailAndPassword(usuario, password).then((respuesta) => {
      console.log(respuesta.user?.displayName);

      if (respuesta.user?.emailVerified == false) {
        this.router.navigate(['/catalogo-producto'])
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
*/
}
