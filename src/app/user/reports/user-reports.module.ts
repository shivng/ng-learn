import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserReportsRoutes } from './user-reports.routes';
import { UserReportsComponent } from './user-reports/user-reports.component';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(UserReportsRoutes)],
  declarations: [UserReportsComponent]
})
export class UserReportsModule {}
