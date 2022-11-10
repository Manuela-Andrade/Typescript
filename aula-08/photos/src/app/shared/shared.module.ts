import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class SharedModule { }
