import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFormComponent } from './form/update-form/update-form.component';
import { PostFormComponent } from './form/post-form/post-form.component';

const routes: Routes = [
  { path: 'update', component: UpdateFormComponent },
  { path: 'post', component: PostFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
