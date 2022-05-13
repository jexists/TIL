import { Component, ViewChild } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NgxCaptureService } from 'ngx-capture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx_capture';
  // [깃허브] https://github.com/Wanchai/ngx-capture

  @ViewChild('screen', { static: true }) screen: any;
  constructor(
    private captureService: NgxCaptureService
  ) {
  }

  onCapture() {
    this.captureService.getImage(this.screen.nativeElement, true)
      .pipe(
        tap(img => {
          // console.log(img);
          var link = document.createElement("a");
          link.setAttribute('download', '');
          link.href = img;
          link.download = `test.jpg`;
          document.body.appendChild(link);
          link.click();
          link.remove();
        })
      ).subscribe();
  }
}
