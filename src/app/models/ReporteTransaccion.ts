export class ReporteTransaccion
{

    private reporte_id: string;
    private cliente_id: string;
    private orden_id: string;
    private producto_id: string;
    private pago_id: string;
  
    constructor(reporte_id: string, cliente_id: string, orden_id: string, producto_id: string, pago_id: string) 
    {
      this.reporte_id = reporte_id;
      this.cliente_id = cliente_id;
      this.orden_id = orden_id;
      this.producto_id = producto_id;
      this.pago_id = pago_id;
    }
  
    getReporteId(): string 
    {
      return `${this.reporte_id}`;
    }
  
    getClienteId(): string 
    {
      return `${this.cliente_id}`
    }

    getOrdenId(): string 
    {
      return `${this.orden_id}`
    }

    getProductoId(): string 
    {
      return `${this.producto_id}`
    }

    getPagoId(): string 
    {
      return `${this.pago_id}`
    }

    

}