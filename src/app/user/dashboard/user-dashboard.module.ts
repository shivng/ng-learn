import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserDashboardRoutes } from './user-dashboard.routes';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserDashboardRoutes)
  ],
  declarations: [UserDashboardComponent]
})
export class UserDashboardModule { }
