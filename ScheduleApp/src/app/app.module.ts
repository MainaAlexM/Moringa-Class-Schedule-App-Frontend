import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TmProfileComponent } from './tm-profile/tm-profile.component';
import { TmProfileEditComponent } from './tm-profile-edit/tm-profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TmProfileComponent,
    TmProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
