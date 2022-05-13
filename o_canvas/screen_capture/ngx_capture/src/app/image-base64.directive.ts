import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImageBase64]'
})
export class ImageBase64Directive {
  @Input('appImageBase64') path: string = '';

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    if (!this.path) return;

    this.getDataUri(this.path, (base64: string) => {
      this.el.nativeElement.src = base64;
      this.el.nativeElement.setAttribute('src', base64);
    })

  }

  getDataUri(targetUrl: string, callback: any) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    // var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // xhr.open('GET', proxyUrl + targetUrl);
    xhr.open('GET', targetUrl);
    xhr.responseType = 'blob';
    xhr.send();
    
    // Cross Domain - CORS
  }

}
