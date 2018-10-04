import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  public fileName: string;

  constructor() { }

  setFileName(fileName:string){
    this.fileName = fileName;
  }

  log(msg: string){
    let fechaFormateada = new Date();


    console.log(`[${fechaFormateada}]  ${this.fileName}: ${msg} `);
  }
}
