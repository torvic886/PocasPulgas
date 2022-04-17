import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalogo-producto',
  templateUrl: './catalogo-producto.component.html',
  styleUrls: ['./catalogo-producto.component.css']
})
export class CatalogoProductoComponent implements OnInit 
{
  titulo = 'Victor';
 

  constructor() { }

  ngOnInit(): void 
  {
  }

}
