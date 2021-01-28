import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  interval;
  lastNumber = 0
  @Output() intervalFired = new EventEmitter<number>();
   

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    } ,1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
