import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCaptureModule } from 'ngx-capture';

import { AppComponent } from './app.component';
import { ImageBase64Directive } from './image-base64.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImageBase64Directive
  ],
  imports: [
    BrowserModule,
    NgxCaptureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
