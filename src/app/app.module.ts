import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { PizzaComponent } from './pizza/pizza.component';
import { PostService } from './shared/post.service';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModuleModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
