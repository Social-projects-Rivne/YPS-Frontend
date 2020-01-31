
import { MasterCabinetsComponent } from './components/master-cabinets/master-cabinets.component';
import { MastersComponent } from './pages/masters/masters.component';
import { HeadassistantsComponent } from './pages/headassistants/headassistants.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { PupilsComponent } from './pages/pupils/pupils.component';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SchoolMainComponent } from './pages/school-main/school-main.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { RegisterSchoolComponent } from './pages/register-school/register-school.component';


const cabinetRoutes: Routes = [
  { path: '', component: MasterCabinetsComponent},
  { path: 'pupils', component: PupilsComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'head-assistants', component: HeadassistantsComponent },
  { path: 'masters', component: MastersComponent}
];

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'school-main', component: SchoolMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'cabinet', component: CabinetComponent, children:cabinetRoutes},
  { path: 'register-school', component: RegisterSchoolComponent},
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
  RegisterSchoolComponent,
  TeachersComponent,
  PupilsComponent,
  ParentsComponent,
  HeadassistantsComponent,
  MastersComponent,
  MasterCabinetsComponent
];
