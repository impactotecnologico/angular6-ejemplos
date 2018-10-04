import {Length, IsEmail, IsFQDN, IsDate, Min, Max} from 'class-validator';



export class Usuario {

  public id: number;

  @Length(3, 20)
  public   nombre: string;

  @IsDate()
  public   fecha: Date;
  public   horas: number;

  constructor(
    id: number,
    nombre: string,
    fecha: Date,
    horas: number
    ){

      this.id = id;
      this.fecha = fecha;
      this.horas = horas;
      this.nombre = nombre;

  }
}
