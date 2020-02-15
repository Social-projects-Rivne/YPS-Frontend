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
import { MainToolsSectionComponent } from './components/main-tools-section/main-tools-section.component';
import { MainContentSectionComponent } from './components/main-content-section/main-content-section.component';
import { UserSubFormComponent } from './components/user-sub-form/user-sub-form.component';
import { AddPupilFormComponent } from './components/add-pupil-form/add-pupil-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterHeadmasterComponent } from './pages/register-headmaster/register-headmaster.component';
import { AddHeadmasterFormComponent } from './components/add-headmaster-form/add-headmaster-form.component';

import { AddTeacherFormComponent } from './components/add-teacher-form/add-teacher-form.component';
import { AddParentFormComponent } from './components/add-parent-form/add-parent-form.component';
import { RecaptchaModule } from 'angular-google-recaptcha';
import { SchoolRegisterFormComponent } from './components/school-register-form/school-register-form.component';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchoolRequestsComponent } from './components/School Requests/school-requests/school-requests.component';
import { SchoolRequestCardComponent } from './components/School Requests/school-request-card/school-request-card.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterHeadmasterResponseComponent } from './pages/register-headmaster-response/register-headmaster-response.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    MainToolsSectionComponent,
    MainContentSectionComponent,
    UserSubFormComponent,
    AddPupilFormComponent,
    RegisterSchoolComponent,
    RegisterHeadmasterComponent,
    AddHeadmasterFormComponent,
    AddTeacherFormComponent,
    AddParentFormComponent,
    TableUserComponent,
    TeachersComponent,
    PupilsComponent,
    ParentsComponent,
    HeadassistantsComponent,
    MastersComponent,
    SchoolRegisterFormComponent,
    RegisterHeadmasterResponseComponent,
    AdminInfoComponent,
    AdminNavbarComponent,
    SidebarComponent, 
    SchoolRequestsComponent,
    SchoolRequestCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RecaptchaModule.forRoot({
      siteKey: '6LefHtYUAAAAABkKaKlf2kwUSmQleDf0HAZiUQse',
    }),
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
