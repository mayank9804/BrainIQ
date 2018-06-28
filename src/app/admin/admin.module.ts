import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInterfaceComponent } from './admin-interface.component';
import { AdminRoutingModule } from './admin-routing..module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,AdminRoutingModule,NgxPaginationModule
  ],
  declarations: [AdminInterfaceComponent]
})
export class AdminModule { }
