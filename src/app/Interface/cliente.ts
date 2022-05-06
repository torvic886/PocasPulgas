export interface cliente 
{
    //$key?: string; //Angular necesita este campos . 
    correo: string;
    direccion: string;  
    documento: string;
    fechaActualizacion: Date;
    fechaCreacion: Date;
    nombre: string;
    password: string;
  }