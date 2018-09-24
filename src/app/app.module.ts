import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepositoryComponent } from './repository/repository.component';
import { RegistrationComponent } from './registration/registration.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepositoryComponent,
    RegistrationComponent,
    BloodbankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
