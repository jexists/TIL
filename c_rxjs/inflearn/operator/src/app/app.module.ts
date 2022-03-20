import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperatorComponent } from './operator/operator.component';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [			
    AppComponent,
      OperatorComponent,
      BasicComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
