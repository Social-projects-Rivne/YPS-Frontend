import { MastersComponent } from './pages/masters/masters.component';
import { HeadassistantsComponent } from './pages/headassistants/headassistants.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { PupilsComponent } from './pages/pupils/pupils.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { TableUserComponent } from './components/table-user/table-user.component';
import { RegisterSchoolComponent } from './pages/register-school/register-school.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { QuotesBoxComponent } from './components/quotes-box/quotes-box.component';
import { SchoolEventFormComponent } from './components/school-event-form/school-event-form.component';
import { NavBarFormComponent } from './components/nav-bar-form/nav-bar-form.component';
import { HeaderFormComponent } from './components/header-form/header-form.component';
import { MainToolsSectionComponent } from './components/main-tools-section/main-tools-section.component';
import { MainContentSectionComponent } from './components/main-content-section/main-content-section.component';
import { UserSubFormComponent } from './components/user-sub-form/user-sub-form.component';
import { AddPupilFormComponent } from './components/add-pupil-form/add-pupil-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterHeadmasterComponent } from './pages/register-headmaster/register-headmaster.component';
import { AddHeadmasterFormComponent } from './components/add-headmaster-form/add-headmaster-form.component';
import { MatIconModule, MatSelectModule, MatButtonModule, MatTableModule, MatSortModule, MatFormFieldModule} from '@angular/material';
import { AddTeacherFormComponent } from './components/add-teacher-form/add-teacher-form.component';
import { AddParentFormComponent } from './components/add-parent-form/add-parent-form.component';
import { AdminCabinetModule } from './components/admin-cabinet/admin-cabinet.module';
import { SharingModule } from './components/sharing/sharing.module';
import { from } from 'rxjs';
import { SchoolRegisterFormComponent } from './components/school-register-form/school-register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    WelcomeComponent,
    FormFieldComponent,
    LoginFormComponent,
    QuotesBoxComponent,
    SchoolEventFormComponent,
    NavBarFormComponent,
    HeaderFormComponent,
    MainToolsSectionComponent,
    MainContentSectionComponent,
    UserSubFormComponent,
    AddPupilFormComponent,
    RegisterSchoolComponent,
    RegisterHeadmasterComponent,
    AddHeadmasterFormComponent,
    TableUserComponent,
    AddTeacherFormComponent,
    AddParentFormComponent,
    TableUserComponent,
    TeachersComponent,
    PupilsComponent,
    ParentsComponent,
    HeadassistantsComponent,
    MastersComponent,
    SchoolRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminCabinetModule,
    SharingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
