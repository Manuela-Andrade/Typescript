//É uma boa pratica separa os imports do angular dos nossos imports
//é bom separar os imports de 2 em2 ou de 3 em 3 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FotografiaModule } from './fotografia/fotografia.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  //Declarations é para declarar component
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  //No imports só entra módulo
  imports: [
    BrowserModule,
    FotografiaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
