import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './form/post-form/post-form.component';

import { StuProfileComponent } from './stu-profile/stu-profile.component';

import { TmProfileComponent } from './tm-profile/tm-profile.component';

import { HomeComponent } from './home/home.component';
import { SessionSchComponent } from './session-sch/session-sch.component';
import { SessionDetailsComponent } from './session-details/session-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    StuProfileComponent,
    TmProfileComponent,
    HomeComponent,
    SessionSchComponent,
    SessionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
