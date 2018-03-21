import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserAiRoutes } from './user-ai.routes';
import { UserAiComponent } from './user-ai/user-ai.component';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(UserAiRoutes)],
  declarations: [UserAiComponent]
})
export class UserAiModule {}
