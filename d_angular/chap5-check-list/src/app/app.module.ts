import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListResultComponent } from './check-list-result/check-list-result.component';
import { CheckListDataService } from './check-list/check-list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CheckListResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CheckListDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
