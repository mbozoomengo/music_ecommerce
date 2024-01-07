import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  brightnessMode: string = 'dark';

  constructor() {}

  toggleBrightnessMode() {
    console.log('Before Toggle:', this.brightnessMode);
    this.brightnessMode = this.brightnessMode === 'dark' ? 'light' : 'dark';
    console.log('After Toggle:', this.brightnessMode);

    document.body.classList.toggle('dark', this.brightnessMode === 'dark');
    document.body.classList.toggle('light', this.brightnessMode === 'light');
  }
}
