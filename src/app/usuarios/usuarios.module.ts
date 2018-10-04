import { ColorerDirective } from './colored.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuariosComponent } from './usuarios.component';
import { CursosComponent } from './cursos/cursos.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { MultiplicadorPipe } from '../pipes/multiplicador.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    UsuariosComponent,
    CursosComponent,
    AsignaturasComponent,
    ColorerDirective,
    MultiplicadorPipe
  ],
  bootstrap: [UsuariosComponent],
})
export class UsuariosModule {}
