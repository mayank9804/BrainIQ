import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponent } from './shared.component';
import { NavbarComponent } from './layouts/navbar.component';
import { SidebarComponent } from './layouts/sidebar.component';
import { SettingsComponent } from './layouts/settings.component';
import { SharedRoutingModule } from './shared-routing.module';
import { PolicyComponent } from './layouts/policy.component';
import { TermsofserviceComponent } from './layouts/termsofservice.component';
import { ContactusComponent } from './layouts/contactus.component';



@NgModule({
  imports: [
    CommonModule,BrowserAnimationsModule,SharedRoutingModule
  ],
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsComponent,
    PolicyComponent,
    TermsofserviceComponent,
    ContactusComponent,
  ]
})
export class SharedModule { }
