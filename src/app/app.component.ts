import { Component } from '@angular/core';
import { CounterComponent } from './counter/components/counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  public title: string = 'Hola mundo';
}
