export interface cliente 
{
  //$key?: string; //Angular necesita este campos . 
    nombre: string;
    correo: string;
    direccion: string;  
    documento: string;
    fechaActualizacion: Date;
    fechaCreacion: Date;
    password: string;
  }