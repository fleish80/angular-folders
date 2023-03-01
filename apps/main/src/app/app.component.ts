import {RouterModule} from '@angular/router';
import {Component} from '@angular/core';
import {LibAOneComponent} from '@angular-folders/lib-a/lib-a-one';

@Component({
  standalone: true,
  imports: [RouterModule, LibAOneComponent],
  selector: 'angular-folders-root',
  template: `
    <router-outlet></router-outlet>
    <angular-folders-lib-a-one/>

  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main';
}
