import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDataComponent } from './shared/input-data/input-data.component';
import { NgChartsModule } from 'ng2-charts';
import { InfographycsComponent } from './shared/infographycs/infographycs.component'

import { NgxSpinnerModule } from 'ngx-spinner';

import { ErrorHandlingInterceptorService } from './shared/interceptors/error-handling.interceptor';
import { SpinnerInterceptorService } from './shared/interceptors/spinner.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DatatableComponent,
    HomeComponent,
    ErrorComponent,
    InputDataComponent,
    InfographycsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    NgChartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
