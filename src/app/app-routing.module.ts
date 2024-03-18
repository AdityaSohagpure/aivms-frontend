import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import { EmployeMainpageComponent } from './components/employe-mainpage/employe-mainpage.component';

const routes: Routes = [


  {
    path: '',
    component: EmployeMainpageComponent
  },
  
  {
  path: 'main',
  component: MainpageComponent,
  
  },
  {
  path: 'register',
  component: RegisterComponent,
  },
  {
    path: 'invitation',
    component: InvitationComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
