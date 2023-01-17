import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'sanitizeUrl'
})
export class SanitizeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: any, prefix = '') {
    let a =this.domSanitizer.bypassSecurityTrustUrl(prefix + value);
    console.log(a);
    return this.domSanitizer.bypassSecurityTrustUrl(prefix + value);
  }

}
