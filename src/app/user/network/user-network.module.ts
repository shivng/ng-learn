import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserNetworkRoutes } from './user-network.routes';
import { UserNetworkComponent } from './user-network/user-network.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(UserNetworkRoutes)],
  declarations: [UserNetworkComponent]
})
export class UserNetworkModule {}
