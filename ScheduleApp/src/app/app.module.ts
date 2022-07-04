import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './form/post-form/post-form.component';
import { UpdateFormComponent } from './form/update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
