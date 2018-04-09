import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { BasicService } from './Service/Basic.service';


import { AppComponent } from './app.component';
import { EmitParentComponent } from './emit-parent/emit-parent.component';
import { EmitChildComponent } from './emit-child/emit-child.component';
import { LearnServicesComponent } from './learn-services/learn-services.component';
import { HeaderComponent } from './header/header.component';
import { UserDashboardComponent } from './user/dashboard/user-dashboard/user-dashboard.component';

import { UserDashboardModule } from './user/dashboard/user-dashboard.module';



const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/user/dashboard/user-dashboard.module#UserDashboardModule'
  },
  {
    path: 'user-dashboard',
    loadChildren: 'app/user/dashboard/user-dashboard.module#UserDashboardModule'
  },
  {
    path: 'user-network',
    loadChildren: 'app/user/network/user-network.module#UserNetworkModule'
  },
  {
    path: 'user-activity',
    loadChildren: 'app/user/activity/user-activity.module'
  },
  {
    path: 'user-ai',
    loadChildren: 'app/user/ai/user-ai.module#UserAiModule'
  },
  {
    path: 'user-reports',
    loadChildren: 'app/user/reports/user-reports.module#UserReportsModule'
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' } // not found handler
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    // EmitParentComponent,
    // EmitChildComponent,
    // LearnServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BasicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
