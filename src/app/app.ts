import { Component, signal } from '@angular/core';
import { Select } from './components/select/select';
import { Switch } from './components/switch/switch';

@Component({
  selector: 'app-root',
  imports: [Switch, Select],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('teste-front-end-totvs-angular');
}
