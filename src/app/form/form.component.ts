import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  @Output() resultChanged = new EventEmitter<number>();
  numberA: number | null = null;
  numberB: number | null = null;

  add(): void {
    if (this.numberA !== null && this.numberB !== null){
      this.resultChanged.emit(this.numberA + this.numberB);
    }
  }
}
