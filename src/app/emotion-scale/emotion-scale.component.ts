import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-emotion-scale',
  templateUrl: './emotion-scale.component.html',
  styleUrls: ['./emotion-scale.component.less']
})
export class EmotionScaleComponent implements AfterViewInit {

  @Input()
  colors: string[] = [];

  @Input()
  emotions: string[] = [];

  @Input()
  initialSelection = -1;

  @Output()
  currentSelection = -1;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.initialSelection > 0) {
      this.selectGrade(this.initialSelection);
    }
  }

  selectGrade(index: number) {
    let selected = this.elRef.nativeElement.querySelector(`.scale-grade__item_selected`);
    if (selected) {
      selected.classList.remove('scale-grade__item_selected');
    }

    if (!selected || this.currentSelection !== index) {
      this.currentSelection = index;
      selected = this.elRef.nativeElement.querySelector(`.scale-grade__item_${this.currentSelection} .selection-node`);
      selected?.classList.add('scale-grade__item_selected');
    }
  }
}
