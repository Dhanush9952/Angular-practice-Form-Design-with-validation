import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { CommonModule } from '@angular/common';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAccountComponent } from './user-account/user-account.component';
import { LoginComponent } from './user-account/login/login.component';
import { RegisterComponent } from './user-account/register/register.component';

import { AppMaterialModule } from './app.material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AccordionsComponent,
    UserAccountComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CdkAccordionModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
