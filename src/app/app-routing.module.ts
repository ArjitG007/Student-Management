import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard',component:StudentDashboardComponent},
  {path:'evaluate', component:EvaluateComponent},
  {path: '', component:LoginComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
