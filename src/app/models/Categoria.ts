export class Categoria
{
    private categoria_id: string;
    private categoria_name: string;
    private categoria_tipo: string;



   constructor(categoria_id: string, categoria_name: string, categoria_tipo: string )
   {
    this.categoria_id = categoria_id;
    this.categoria_name = categoria_name;
    this.categoria_tipo = categoria_tipo;
   }

   //prueba sourcetree
   getCategoriaId(): string 
    {
      return `${this.categoria_id}`;
    }
  
    getCategoriaName(): string 
    {
      return `${this.categoria_name}`
    }

    getCategoriaTipo(): string 
    {
      return `${this.categoria_tipo}`
    }

}