import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[numeric]'
})
export class NumericDirective {

  private check(value: string): any {
    return String(value).match(new RegExp(/^\d+$/));
  }

  private run(oldValue: any): any {
      setTimeout(() => {
          const currentValue: string = this.el.nativeElement.value;
          if (currentValue !== '' && !this.check(currentValue)) {
              this.el.nativeElement.value = oldValue;
          }
      });
  }

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): any {
      this.run(this.el.nativeElement.value);
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): any {
      this.run(this.el.nativeElement.value);
  }

}
