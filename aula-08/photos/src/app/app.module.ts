//É uma boa pratica separa os imports do angular dos nossos imports
//é bom separar os imports de 2 em2 ou de 3 em 3 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FotografiaModule } from './fotografia/fotografia.module';


@NgModule({
  //Declarations é para declarar component
  declarations: [
    AppComponent
  ],
  //No imports só entra módulo
  imports: [
    FotografiaModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
