import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import {ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './appcomponents/home/app.home';
import { HeaderComponent } from './appcomponents/header/app.header';
import { AppService } from './services/app.services';

@NgModule({
  declarations: [
    AppComponent , HomeComponent , HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }