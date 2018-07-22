import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInterfaceComponent } from './admin-interface.component';
import { AdminRoutingModule } from './admin-routing..module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,AdminRoutingModule,NgxPaginationModule,FormsModule
  ],
  declarations: [AdminInterfaceComponent]
})
export class AdminModule { }
