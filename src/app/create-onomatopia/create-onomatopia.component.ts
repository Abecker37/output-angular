import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.scss'
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string ="";

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopia() :void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}