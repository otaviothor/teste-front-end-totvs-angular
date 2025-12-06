import { ContentChildren, Directive, Host, HostListener, QueryList } from '@angular/core';
import { KeyboardManagedItemDirective } from '../keyboard-managed-item/keyboard-managed-item.directive';

@Directive({
  selector: '[appKm]',
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagedItemDirective)
  public items!: QueryList<KeyboardManagedItemDirective>;

  @HostListener('keyup', ['$event'])
  public manageKeys( event : KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      default:
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentSelectedINdex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[currentSelectedINdex + direction];

    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT ? items[items.length - 1] : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}
