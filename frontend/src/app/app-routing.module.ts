import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [NoAuthGuard],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: 'tasks',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TaskListComponent },
      {
        path: 'create',
        component: TaskCreateComponent,
        canDeactivate: [UnsavedChangesGuard]
      },
      {
        path: ':id/edit',
        component: TaskEditComponent,
        canDeactivate: [UnsavedChangesGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'tasks'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
