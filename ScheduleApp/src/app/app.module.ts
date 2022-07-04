import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './form/post-form/post-form.component';
import { UpdateFormComponent } from './form/update-form/update-form.component';
import { AddStudentFormComponent } from './form/add-student-form/add-student-form.component';
import { ScheduleComponent } from './schedules/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    UpdateFormComponent,
    AddStudentFormComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
