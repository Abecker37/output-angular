import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lesOutputs';

  onomatopiaList: string[] = [] ;

  onReceiveNewOnomatopia(onomatopia: string) :void {
    this.onomatopiaList.push(onomatopia);
  }

}