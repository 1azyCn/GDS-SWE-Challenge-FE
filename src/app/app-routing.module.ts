import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ErrorComponent } from './page/error/error.component';
import { LoginComponent } from './page/login/login.component';
import { UploadComponent } from './page/upload/upload.component';

const routes: Routes = [
  //Login page + Default Page
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  //Upload page
  {path: 'upload/:username', component: UploadComponent},

  // DashBoard
  {path: 'dashboard', component: DashboardComponent},
  
  // Error page
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
