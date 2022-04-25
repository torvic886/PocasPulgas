export class OrdenCompra
{
    private orden_id: string;
    private cliente_id: string;
    private fecha: string;

  
    constructor(orden_id: string, cliente_id: string, fecha: string) 
    {
      this.orden_id = orden_id;
      this.cliente_id = cliente_id;
      this.fecha = fecha;

    }
  
    getOrdenId(): string 
    {
      return `${this.orden_id}`;
    }
  
    getClienteId(): string 
    {
      return `${this.cliente_id}`
    }

    getFecha(): string 
    {
      return `${this.fecha}`
    }

}