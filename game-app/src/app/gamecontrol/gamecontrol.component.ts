import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  initialNum = 0;
  @Output() numberIncremented = new EventEmitter<this.initialNum: number>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.numberIncremented.emit(this.initialNum)
  }
}
