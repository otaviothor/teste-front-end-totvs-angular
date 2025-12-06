import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appKmItem]',
})
export class KeyboardManagedItemDirective {
  @Output() public focused = new EventEmitter<HTMLElement>();
  constructor(private elRef: ElementRef<HTMLElement>) {}

  public focus(): void {
    this.elRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return document.activeElement === this.elRef.nativeElement;
  }
}
