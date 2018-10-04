import { UsuariosModule } from './app/usuarios/usuarios.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(UsuariosModule)
  .catch(err => console.error(err));

