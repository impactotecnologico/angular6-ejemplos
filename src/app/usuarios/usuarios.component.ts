import { LoggerService } from './../services/logger.service';
import { Usuario } from "./../models/usuario";
import { Component, OnInit } from "@angular/core";
import {validate} from "class-validator";
import { ISubscription } from "rxjs/Subscription";


@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<any>;
  headers: Array<string> = ["id", "nombre", "fecha", "horas"];

  constructor(public logger: LoggerService) {
    this.usuarios = [
      new Usuario(1, "Jose", new Date(1983, 4, 13), 8),
      new Usuario(2, "Julian", new Date(1983, 5, 13), 18),
      new Usuario(3, "Jo", new Date(1983, 8, 13), 28)
    ];
    this.logger.setFileName("usuario.component.ts");

    this.logger.log("hola");
  }

  ngOnInit() {}

  getCSSClasses(fila: number) {
    let cssClasses;
    if (fila % 2 == 0) {
      cssClasses = {
        par: true
      };
    } else {
      cssClasses = {
        impar: true
      };
    }
    return cssClasses;
  }

  validaciones(usu :Usuario){
    validate(usu).then(errors => {
      if (errors.length > 0) {
          console.log("validation failed. errors: ", errors);
      } else {
          console.log("validation succeed");
      }
  });
  }
}
