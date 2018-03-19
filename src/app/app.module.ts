import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BasicService } from './Service/Basic.service';


import { AppComponent } from './app.component';
import { EmitParentComponent } from './emit-parent/emit-parent.component';
import { EmitChildComponent } from './emit-child/emit-child.component';
import { LearnServicesComponent } from './learn-services/learn-services.component';

@NgModule({
  declarations: [
    AppComponent,
    EmitParentComponent,
    EmitChildComponent,
    LearnServicesComponent   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule 
  ],
  providers: [BasicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
