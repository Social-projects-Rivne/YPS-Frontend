import { HeadAssistantScheduleComponent } from './pages/head-assistant-schedule/head-assistant-schedule.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { PupilsComponent } from './pages/pupils/pupils.component';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SchoolMainComponent } from './pages/school-main/school-main.component';
import { RegisterSchoolComponent } from './pages/register-school/register-school.component';
import { RegisterHeadmasterComponent } from './pages/register-headmaster/register-headmaster.component';
import { RegisterHeadmasterResponseComponent } from './pages/register-headmaster-response/register-headmaster-response.component';
import { AdminCabinetComponent } from './pages/admin-cabinet/admin-cabinet.component';
import { SchoolRequestsComponent } from './components/School Requests/school-requests/school-requests.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { MasterGuard } from './guards/master.guard';
import { AdminGuard } from './guards/admin.guard';
import { TeacherGuard } from './guards/teacher.guard';
import { StudentGuard } from './guards/student.guard';
import { ParentGuard } from './guards/parent.guard';
import { HeadMasterGuard } from './guards/head-master.guard';
import { HeadAssistentGuard } from './guards/head-assistent.guard';
import { TeacherCabinetComponent } from './pages/teacher-cabinet/teacher-cabinet.component';
import { ParentCabinetComponent } from './pages/parent-cabinet/parent-cabinet.component';
import { ChildrenInfoComponent } from './components/children-info/children-info.component';
import { ParentProfileComponent } from './pages/parent-profile/parent-profile.component';
import { PupilCabinetComponent } from './pages/pupil-cabinet/pupil-cabinet.component';
import { UpcomingTestsComponent } from './pages/upcoming-tests/upcoming-tests.component';
import { HeadMasterCabinetComponent } from './pages/head-master-cabinet/head-master-cabinet.component';
import { HeadMasterProfileComponent } from './pages/head-master-profile/head-master-profile.component';
import { MasterProfileComponent } from './pages/master-profile/master-profile.component';
import { MasterCabinetComponent } from './pages/master-cabinet/master-cabinet.component';
import { TeacherProfileComponent } from './pages/teacher-profile/teacher-profile.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { PupilProfileComponent } from './pages/pupil-profile/pupil-profile.component';
import { HeadAssistantCabinetComponent } from './pages/head-assistant-cabinet/head-assistant-cabinet.component';
import { HeadAssistantProfileComponent } from './pages/head-assistant-profile/head-assistant-profile.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { JournalColumnComponent } from './pages/journal-column/journal-column.component';
import { HeadAssistantUpcomingEventsComponent } from './pages/head-assistant-upcoming-events/head-assistant-upcoming-events.component';
import { PupilJournalComponent } from './pages/pupil-journal/pupil-journal.component';
import { MyClassJournalComponent } from './pages/my-class-journal/my-class-journal.component';

const headMasterRoutes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: HeadMasterProfileComponent },
  { path: 'pupils', canActivateChild: [AuthGuard], component: PupilsComponent },
  { path: 'parents', canActivateChild: [AuthGuard], component: ParentsComponent },
  { path: 'teachers', canActivateChild: [AuthGuard], component: TeachersComponent },
  { path: 'classes', canActivate: [AuthGuard], component: ClassesComponent }
];

const masterRoutes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: MasterProfileComponent },
  { path: 'pupils', canActivateChild: [AuthGuard], component: PupilsComponent },
  { path: 'parents', canActivateChild: [AuthGuard], component: ParentsComponent },
  { path: 'teachers', canActivateChild: [AuthGuard], component: TeachersComponent },
  { path: 'classes', canActivate: [AuthGuard], component: ClassesComponent }
];

const adminRoutes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: AdminProfileComponent },
  { path: 'school-requests', canActivateChild: [AuthGuard], component: SchoolRequestsComponent }
];
const teacherRoutes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: TeacherProfileComponent },
  { path: 'upcoming-tests', canActivateChild: [AuthGuard], component: UpcomingTestsComponent },
  { path: 'schedule', canActivateChild: [AuthGuard], component: ScheduleComponent },
  { path: 'journalcolumn', canActivateChild: [AuthGuard], component: JournalColumnComponent },
  { path: 'lessons', canActivateChild: [AuthGuard], component: LessonsComponent },
  { path: 'my-class-journal', canActivateChild: [AuthGuard], component: MyClassJournalComponent}
];
const headAssistantRoutes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: HeadAssistantProfileComponent },
  { path: 'upcoming-events', canActivateChild: [AuthGuard], component: HeadAssistantUpcomingEventsComponent},
  { path: 'schedule', canActivateChild: [AuthGuard], component: HeadAssistantScheduleComponent}
];
const parentRoutes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: ParentProfileComponent },
  { path: 'children', canActivateChild: [AuthGuard], component: ChildrenInfoComponent}
];
const pupilRoutes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: PupilProfileComponent },
  { path: 'schedule', canActivateChild: [AuthGuard], component: ScheduleComponent },
  { path: 'journal', canActivateChild: [AuthGuard], component: PupilJournalComponent}
];

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'school-main',
    canActivate: [AuthGuard],
    component: SchoolMainComponent
  },
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
  { path: 'head-master', component: HeadMasterCabinetComponent, canActivate: [AuthGuard, HeadMasterGuard], children: headMasterRoutes },
  { path: 'master', component: MasterCabinetComponent, canActivate: [AuthGuard, MasterGuard], children: masterRoutes },
  {
    path: 'admin',
    component: AdminCabinetComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: adminRoutes
  },
  { path: 'register-school', canActivate: [LoginGuard], component: RegisterSchoolComponent },
  { path: 'register-headmaster/:link', component: RegisterHeadmasterComponent },
  { path: 'register-headmaster-response', component: RegisterHeadmasterResponseComponent },
  {
    path: 'head-assistant',
    canActivate: [AuthGuard, HeadAssistentGuard],
    component: HeadAssistantCabinetComponent,
    children: headAssistantRoutes
  },
  {
    path: 'teacher',
    canActivate: [AuthGuard, TeacherGuard],
    component: TeacherCabinetComponent,
    children: teacherRoutes
  },
  {
    path: 'parent',
    component: ParentCabinetComponent,
    canActivate: [AuthGuard, ParentGuard],
    children: parentRoutes
  },
  {
    path: 'pupil',
    component: PupilCabinetComponent,
    canActivate: [AuthGuard, StudentGuard],
    children: pupilRoutes
  },

  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
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
  RegisterSchoolComponent,
  TeachersComponent,
  PupilsComponent,
  ParentsComponent,
  AdminCabinetComponent,
  ParentCabinetComponent,
  UpcomingTestsComponent,
  ChildrenInfoComponent,
  HeadMasterCabinetComponent,
  HeadMasterProfileComponent,
  HeadAssistantUpcomingEventsComponent,
  MasterProfileComponent,
  MasterCabinetComponent,
  TeacherProfileComponent,
  AdminProfileComponent,
  ParentProfileComponent,
  PupilProfileComponent,
  HeadAssistantProfileComponent,
  HeadAssistantCabinetComponent,
  HeadAssistantScheduleComponent,
  ScheduleComponent,
  LessonsComponent,
  JournalColumnComponent,
  PupilJournalComponent,
  MyClassJournalComponent
];
