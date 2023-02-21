import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { Json2csvComponent } from './shared/json2csv/json2csv.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    DatatableComponent,
    HomeComponent,
    ErrorComponent,
    Json2csvComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
