import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResistorComponent } from './resistor/resistor.component';
//import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResistorComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    ReactiveFormsModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),
    BrowserAnimationsModule,
    // MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
