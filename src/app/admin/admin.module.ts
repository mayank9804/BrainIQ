import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInterfaceComponent } from './admin-interface.component';
import { AdminRoutingModule } from './admin-routing..module';
import {Ng2PaginationModule} from 'ng2-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,AdminRoutingModule,Ng2PaginationModule,FormsModule
  ],
  declarations: [AdminInterfaceComponent]
})
export class AdminModule { }
