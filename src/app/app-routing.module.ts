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
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { RegisterSchoolComponent } from './pages/register-school/register-school.component';
import { RegisterHeadmasterComponent } from './pages/register-headmaster/register-headmaster.component';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { SchoolRequestsComponent } from './components/School Requests/school-requests/school-requests.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const cabinetRoutes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: MasterCabinetsComponent },
  { path: 'pupils', canActivateChild: [AuthGuard], component: PupilsComponent },
  { path: 'parents', canActivateChild: [AuthGuard], component: ParentsComponent },
  { path: 'teachers', canActivateChild: [AuthGuard], component: TeachersComponent },
  { path: 'head-assistants', canActivateChild: [AuthGuard], component: HeadassistantsComponent },
  { path: 'masters', canActivateChild: [AuthGuard], component: MastersComponent }
];

const adminRoutes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: AdminInfoComponent },
  { path: 'schoolRequest', canActivateChild: [AuthGuard], component: SchoolRequestsComponent }
];

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'school-main', canActivate: [AuthGuard], component: SchoolMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard], children: adminRoutes },
  { path: 'cabinet', component: CabinetComponent, canActivate: [AuthGuard], children: cabinetRoutes },
  { path: 'register-school', component: RegisterSchoolComponent },
  { path: 'register-headmaster', canActivate: [AuthGuard], component: RegisterHeadmasterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  MainComponent,
  LoginComponent,
  SchoolMainComponent,
  CabinetComponent,
  RegisterSchoolComponent,
  TeachersComponent,
  PupilsComponent,
  ParentsComponent,
  HeadassistantsComponent,
  MastersComponent,
  MasterCabinetsComponent,
  CabinetComponent,
  AdminPanelComponent
];
