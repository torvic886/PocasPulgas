export class Empleado
{

    private nombre: string;
    private documento: string;
    private direccion: string;
    private correo: string;
  
    constructor(nombre: string, documento: string, direccion: string, correo: string) 
    {
      this.nombre = nombre;
      this.documento = documento;
      this.direccion = direccion;
      this.correo = correo;
    }
  
    getName(): string 
    {
      return `${this.nombre}`;
    }
  
    getDocument(): string 
    {
      return `${this.documento}`
    }

    getDirection(): string 
    {
      return `${this.direccion}`
    }

    getEmail(): string 
    {
      return `${this.correo}`
    }
}