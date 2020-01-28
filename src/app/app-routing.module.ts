import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SchoolMainComponent } from './pages/school-main/school-main.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { RegisterSchoolComponent } from './pages/register-school/register-school.component';
import { RegisterHeadmasterComponent } from './pages/register-headmaster/register-headmaster.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'school-main', component: SchoolMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'cabinet', component: CabinetComponent},
  { path: 'register-school', component: RegisterSchoolComponent},
  { path: 'register-headmaster', component: RegisterHeadmasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// * Array of Routing Components for importing to AppModule
// ! Put All The Routing/Pages Components Here
export const RoutingComponents = [
  MainComponent,
  LoginComponent,
  SchoolMainComponent,
  AdminComponent,
  CabinetComponent,
  RegisterSchoolComponent
];
