import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id.service';
import { ISelectOption } from '../../interfaces/select.interface';
import { KeyboardManagerDirective } from '../../directives/keyboard-manager/keyboard-manager.directive';
import { KeyboardManagedItemDirective } from '../../directives/keyboard-managed-item/keyboard-managed-item.directive';

@Component({
  selector: 'app-select',
  imports: [KeyboardManagedItemDirective, KeyboardManagerDirective],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => Select),
  }],
})
export class Select implements ControlValueAccessor {
  @Input() public label = '';
  @Input() public options: ISelectOption[] = [];
  @Input() public value?: string;
  @Input() public disabled = false;
  @Output() public valueChange = new EventEmitter<string>();

  public id = '';

  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor(private readonly uniqueIdService: UniqueIdService) {
    this.id = this.uniqueIdService.generateUniqueIdWithPrefix('select');
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public activate(event: Event): void {
    this.writeValue((event.target as HTMLSelectElement).value as unknown as string);
  }
}
