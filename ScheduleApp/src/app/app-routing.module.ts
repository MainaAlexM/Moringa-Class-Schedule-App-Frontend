import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFormComponent } from './form/update-form/update-form.component';
import { PostFormComponent } from './form/post-form/post-form.component';
import { AddStudentFormComponent } from './form/add-student-form/add-student-form.component';
import { ScheduleComponent } from './schedules/schedule/schedule.component';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  { path: 'update', component: UpdateFormComponent },
  { path: 'post', component: PostFormComponent },
  { path: 'add', component: AddStudentFormComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'search', component: SearchComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
