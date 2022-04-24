export class Producto
{
    private producto_id: string;
    private categoria_id: string;
    private producto_name: string;



constructor(producto_id: string, categoria_id: string, producto_name: string )
{
 this.producto_id = producto_id;
 this.categoria_id = categoria_id;
 this.producto_name = producto_name;
}



    getProducto_id(): string 
    {
      return `${this.producto_id}`;
    }
  
    getCategoria_id(): string 
    {
      return `${this.categoria_id}`
    }

    getProducto_name(): string 
    {
      return `${this.producto_name}`
    }

}