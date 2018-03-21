import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserNetworkRoutes } from './user-network.routes';
import { UserNetworkComponent } from './user-network/user-network.component';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(UserNetworkRoutes)],
  declarations: [UserNetworkComponent]
})
export class UserNetworkModule {}
