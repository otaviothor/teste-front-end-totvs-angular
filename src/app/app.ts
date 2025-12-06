import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select } from './shared/components/select/select';
import { Switch } from './shared/components/switch/switch';
import { ISelectOption } from './shared/interfaces/select.interface';
import { UniqueIdService } from './shared/services/unique-id.service';

@Component({
  selector: 'app-root',
  imports: [Switch, Select, ReactiveFormsModule, FormsModule],
  providers: [UniqueIdService],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('teste-front-end-totvs-angular');

  public form: FormGroup;
  public controlNames: ISelectOption[] = [
    { value: 'sitcom', label: 'Sitcom' },
    { value: 'notifications', label: 'Notifications' },
  ];

  public sitcoms: ISelectOption[] = [
    { value: 'friends', label: 'Friends' },
    { value: 'how-i-met-your-mother', label: 'How I Met Your Mother' },
    { value: 'the-big-bang-theory', label: 'The Big Bang Theory' },
    { value: 'the-office', label: 'The Office' },
    { value: 'parks-and-recreation', label: 'Parks and Recreation' },
    { value: 'the-middle', label: 'The Middle' },
    { value: 'seinfeld', label: 'Seinfeld' },
  ];

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      sitcom: [''],
      notifications: [null],
    });
  }

  public disableControls(disabled: boolean): void {
    if (disabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  public submit(): void {
    alert('Submitted! === ' + JSON.stringify(this.form.value));
  }
}
