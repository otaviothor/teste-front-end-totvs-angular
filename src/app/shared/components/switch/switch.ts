import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id.service';
import { KeyboardManagedItemDirective } from '../../directives/keyboard-managed-item/keyboard-managed-item.directive';
import { KeyboardManagerDirective } from '../../directives/keyboard-manager/keyboard-manager.directive';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-switch',
  imports: [KeyboardManagedItemDirective, KeyboardManagerDirective, JsonPipe],
  templateUrl: './switch.html',
  styleUrl: './switch.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => Switch),
    },
  ],
})
export class Switch implements ControlValueAccessor {
  @Input() public label = '';
  @Input() public value = false;
  @Input() public disabled = false;
  @Output() public valueChange = new EventEmitter<boolean>();

  public id = '';

  public onChange = (value: boolean) => {};
  public onTouched = () => {};

  constructor(private readonly uniqueIdService: UniqueIdService) {
    this.id = this.uniqueIdService.generateUniqueIdWithPrefix('switch');
  }

  public writeValue(value: boolean): void {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  public registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public activate(value: boolean): void {
    this.writeValue(value);
  }


}
