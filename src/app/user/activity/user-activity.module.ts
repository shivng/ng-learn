import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserActivityRoutes } from './user-activity.routes';
import { UserActivityComponent } from './user-activity.component';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(UserActivityRoutes)],
  declarations: [UserActivityComponent]
})
export default class UserActivityModule {}
