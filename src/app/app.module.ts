
import { SideBarElementComponent } from './components/side-bar-element/side-bar-element.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

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
import { AdminPanelComponent } from './components/admin-cabinet/admin-panel/admin-panel.component';
import { UserSubFormComponent } from './components/user-sub-form/user-sub-form.component';
import { AddPupilFormComponent } from './components/add-pupil-form/add-pupil-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterSchoolComponent } from './pages/register-school/register-school.component';
import { SchoolRegisterFormComponent } from './components/school-register-form/school-register-form.component';
import { MatIconModule, MatSelectModule, MatButtonModule, MatTableModule, MatSortModule, MatFormFieldModule} from '@angular/material';
import { TableUserComponent } from './components/table-user/table-user.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { PupilsComponent } from './pages/pupils/pupils.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { HeadassistantsComponent } from './pages/headassistants/headassistants.component';
import { MastersComponent } from './pages/masters/masters.component';
import { SchoolRequestsComponent } from './components/admin-cabinet/School Requests/school-requests/school-requests.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { SchoolRequestCardComponent } from './components/admin-cabinet/School Requests/school-request-card/school-request-card.component';

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
    AdminPanelComponent,
    SideBarComponent,
    SideBarElementComponent,
    UserSubFormComponent,
    AddPupilFormComponent,
    RegisterSchoolComponent,
    School_Register
    SchoolRegisterFormComponent
    TableUserComponent
    TeachersComponent,
    PupilsComponent,
    ParentsComponent,
    HeadassistantsComponent,
    MastersComponent,
    SchoolRequestsComponent,
    SchoolRequestCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
