import { MasterComponent } from './pages/master/master.component';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'master', component: MasterComponent }
=======
  { path: 'admin', component: AdminComponent}
>>>>>>> dev
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
<<<<<<< HEAD
  MasterComponent
=======
  AdminComponent
>>>>>>> dev
];
