import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreService } from './core.service';
import {  WINDOW_PROVIDERS } from './window.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    CoreService,WINDOW_PROVIDERS
  ]
})
export class CoreModule { }