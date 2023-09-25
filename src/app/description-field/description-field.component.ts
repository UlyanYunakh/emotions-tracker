import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description-field',
  templateUrl: './description-field.component.html',
  styleUrls: ['./description-field.component.less']
})
export class DescriptionFieldComponent {
  @Output()
  onValueChangeEvent = new EventEmitter<string>();

  onValueChange(event: Event) {
    this.onValueChangeEvent.next((event.target as any).value);
  }
}
