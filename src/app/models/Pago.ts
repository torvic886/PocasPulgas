export class Pago
{

    private pago_id: string;
    private categoria_id: string;
    private fecha: string;

  
    constructor(pago_id: string, categoria_id: string, fecha: string) 
    {
      this.pago_id = pago_id;
      this.categoria_id = categoria_id;
      this.fecha = fecha;

    }
  
    getPagoId(): string 
    {
      return `${this.pago_id}`;
    }
  
    getCategoriaId(): string 
    {
      return `${this.categoria_id}`
    }

    getFecha(): string 
    {
      return `${this.fecha}`
    }

}