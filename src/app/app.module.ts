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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuotesBoxComponent } from './components/quotes-box/quotes-box.component';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TeacherCabinetComponent } from './pages/teacher-cabinet/teacher-cabinet.component';
import { ParentCabinetComponent } from './pages/parent-cabinet/parent-cabinet.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { AddClassFormComponent } from './components/add-class-form/add-class-form.component';
import { TokenInterceptor } from './helpers/token.interceptor';
import { ChildrenInfoComponent } from './components/children-info/children-info.component';
import { PupilInfoCardComponent } from './components/pupil-info-card/pupil-info-card.component';
import { ClassListComponent } from './components/class-list/class-list.component';
import { ClassItemComponent } from './components/class-item/class-item.component';
import { PupilCabinetComponent } from './pages/pupil-cabinet/pupil-cabinet.component';
import { UpcomingTestItemComponent } from './components/upcoming-test-item/upcoming-test-item.component';
import { UpcomingTestListComponent } from './components/upcoming-test-list/upcoming-test-list.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { PupilProfileComponent } from './pages/pupil-profile/pupil-profile.component';
import { AddUpcomingTestFormComponent } from './components/add-upcoming-test-form/add-upcoming-test-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { ScheduleCardComponent } from './components/schedule-card/schedule-card.component';
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';
import { UpcomingTestCardComponent } from './components/upcoming-test-card/upcoming-test-card.component';
import { UpcomingTestCardListComponent } from './components/upcoming-test-card-list/upcoming-test-card-list.component';
import { ScheduleDayCardComponent } from './components/schedule-day-card/schedule-day-card.component';
import { MainScheduleComponent } from './components/main-schedule/main-schedule.component';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';
import { LessonDayCardComponent } from './components/lesson-day-card/lesson-day-card.component';
import { LessonItemComponent } from './components/lesson-item/lesson-item.component';
import { AddScheduleFormComponent } from './components/add-schedule-form/add-schedule-form.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { AddUpcomingEventFormComponent } from './components/add-upcoming-event-form/add-upcoming-event-form.component';
import { HeadAssistantUpcomingEventsComponent } from './pages/head-assistant-upcoming-events/head-assistant-upcoming-events.component';
import { PupilItemComponent } from './components/pupil-item/pupil-item.component';
import { PupilListComponent } from './components/pupil-list/pupil-list.component';
import { UpcomingEventCardComponent } from './components/upcoming-event-card/upcoming-event-card.component';
import { UpcomingEventCardListComponent } from './components/upcoming-event-card-list/upcoming-event-card-list.component';
import { ParentItemComponent } from './components/parent-item/parent-item.component';
import { ParentListComponent } from './components/parent-list/parent-list.component';
import { ChildrenBoxComponent } from './components/children-box/children-box.component';
import { TeacherItemComponent } from './components/teacher-item/teacher-item.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { PupilJournalComponent } from './pages/pupil-journal/pupil-journal.component';
import { PupilJournalColumnCardComponent } from './components/pupil-journal-column-card/pupil-journal-column-card.component';
import { PupilJournalColumnMarkComponent } from './components/pupil-journal-column-mark/pupil-journal-column-mark.component';
import { PupilJournalColumnListComponent } from './components/pupil-journal-column-list/pupil-journal-column-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    WelcomeComponent,
    FormFieldComponent,
    LoginFormComponent,
    QuotesBoxComponent,
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
    SidebarComponent,
    SchoolRequestsComponent,
    SchoolRequestCardComponent,
    HeaderComponent,
    PageNotFoundComponent,
    TeacherCabinetComponent,
    ParentCabinetComponent,
    ClassesComponent,
    AddClassFormComponent,
    ChildrenInfoComponent,
    PupilInfoCardComponent,
    ClassListComponent,
    ClassItemComponent,
    PupilCabinetComponent,
    UpcomingTestItemComponent,
    UpcomingTestListComponent,
    ProfileCardComponent,
    PupilProfileComponent,
    AddUpcomingTestFormComponent,
    ScheduleCardComponent,
    ScheduleItemComponent,
    UpcomingTestCardComponent,
    UpcomingTestCardListComponent,
    ScheduleDayCardComponent,
    MainScheduleComponent,
    LessonCardComponent,
    LessonDayCardComponent,
    LessonItemComponent,
    AddScheduleFormComponent,
    AddUpcomingEventFormComponent,
    HeadAssistantUpcomingEventsComponent,
    PupilItemComponent,
    PupilListComponent,
    UpcomingEventCardComponent,
    UpcomingEventCardListComponent,
    ParentItemComponent,
    ParentListComponent,
    ChildrenBoxComponent,
    TeacherItemComponent,
    TeacherListComponent,
    PupilJournalComponent,
    PupilJournalColumnCardComponent,
    PupilJournalColumnMarkComponent,
    PupilJournalColumnListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RecaptchaModule.forRoot({
      siteKey: "6LefHtYUAAAAABkKaKlf2kwUSmQleDf0HAZiUQse"
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
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: {
        useUtc: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
