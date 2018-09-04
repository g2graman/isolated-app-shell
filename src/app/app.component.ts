import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{ title }}
    </h1>

    <div>
      <div>
        <a href="/count">count link</a>
        <button routerLink="/count">count button</button>
      </div>
      <div>
        <a href="/">Home</a>
        <button routerLink="">home button</button>
      </div>
    </div>

    <br/><br/>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-shell';
}
