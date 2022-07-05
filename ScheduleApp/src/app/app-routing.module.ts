import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuProfileComponent } from './stu-profile/stu-profile.component';
import { TmProfileComponent } from './tm-profile/tm-profile.component';
import { HomeComponent } from './home/home.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { SessionSchComponent } from './session-sch/session-sch.component';

const routes: Routes = [
  {path: "tm", component: TmProfileComponent},
  {path: "home", component: HomeComponent},
  {path: "stu", component: StuProfileComponent},
  {path: "session-search", component: SessionSchComponent},
  {path: "session", component: SessionDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
