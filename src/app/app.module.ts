import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
=======
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DatatableComponent } from './datatable/datatable.component';
>>>>>>> 863731999ab4096377ad1abfc042c4ca3b25bec9

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
SpinnerComponent
=======
    HeaderComponent,
    FooterComponent,
    DatatableComponent
>>>>>>> 863731999ab4096377ad1abfc042c4ca3b25bec9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
