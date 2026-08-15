import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Veriables } from './components/veriables/veriables';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBinding, Veriables],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basicAngular');
}
