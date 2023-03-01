import {Component} from '@angular/core';
import {LibATwoComponent} from '@angular-folders/lib-a/lib-a-two';

@Component({
  selector: 'angular-folders-lib-a-one',
  standalone: true,
  imports: [
    LibATwoComponent
  ],
  template: `
    <p>
      lib-a-one works!
      <angular-folders-lib-a-two/>
    </p>
  `,
  styles: [
  ]
})
export class LibAOneComponent {

}
