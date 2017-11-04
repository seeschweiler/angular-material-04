import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UsertableComponent } from './components/usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
