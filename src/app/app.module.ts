import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InvitationComponent } from './components/invitation/invitation.component';
import { EmployeMainpageComponent } from './components/employe-mainpage/employe-mainpage.component';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    RegisterComponent,
    InvitationComponent,
    EmployeMainpageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
