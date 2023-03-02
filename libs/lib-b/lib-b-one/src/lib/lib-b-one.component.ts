import {Component} from '@angular/core';
import {LibBTwoComponent} from '@angular-folders/lib-b/lib-b-two';

@Component({
  selector: 'angular-folders-lib-b-one',
  standalone: true,
  imports: [
    LibBTwoComponent
  ],
  template: `
    <p>
      lib-b-one works!
      <angular-folders-lib-b-two/>
    </p>
  `,
  styles: [
  ]
})
export class LibBOneComponent {

}
