import {Component} from '@angular/core';
import {LibBOneComponent} from '@angular-folders/lib-b/lib-b-one';

@Component({
  selector: 'angular-folders-lib-a-two',
  standalone: true,
  imports: [
    LibBOneComponent
  ],
  template: `
    <p>
      lib-a-two works!
      <angular-folders-lib-b-one/>
    </p>
  `,
  styles: [
  ]
})
export class LibATwoComponent {

}
