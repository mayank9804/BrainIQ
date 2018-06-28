import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsComponent } from './layouts/settings.component';
import { PolicyComponent } from './layouts/policy.component';
import { TermsofserviceComponent } from './layouts/termsofservice.component';
import { ContactusComponent } from './layouts/contactus.component';
import { NavbarComponent } from './layouts/navbar.component';
import { SidebarComponent } from './layouts/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,BrowserAnimationsModule,RouterModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SettingsComponent,
    PolicyComponent,
    TermsofserviceComponent,
    ContactusComponent,
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    FormsModule
  ]
})
export class SharedModule { }
