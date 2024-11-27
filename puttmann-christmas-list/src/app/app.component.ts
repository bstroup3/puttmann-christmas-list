import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <main>
      <header class="header">
        <h1>Puttmann Christmas Lists</h1>
      </header>
    </main>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'puttmann-christmas-list';
}
