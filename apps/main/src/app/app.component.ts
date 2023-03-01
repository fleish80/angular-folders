import {RouterModule} from '@angular/router';
import {Component} from '@angular/core';
import {LibAOneComponent} from '@angular-folders/lib-a/lib-a-one';
import {LibBOneComponent} from '@angular-folders/lib-b/lib-b-one';
import {LibBTwoComponent} from '@angular-folders/lib-b/lib-b-two';

@Component({
  standalone: true,
  imports: [RouterModule, LibAOneComponent, LibBOneComponent, LibBTwoComponent],
  selector: 'angular-folders-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main';
}
