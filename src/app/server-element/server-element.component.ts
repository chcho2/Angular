import { 
  Component, 
  Input, 
  OnInit, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  ViewEncapsulation, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // other options None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // using @Input make the srvElement available to parent component so can pass it down to srvElement
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  // kicks in first before any hook
  constructor() { 
    console.log('constructor called')
  }

  // works before ngOnInit
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
  }

  ngOnInit(): void {
    console.log('ngInit called')
  }

  // runs anytime to check if changed and after ngOnInit if ngOnInit kicks in
  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  // calls after doCheck and only once because only ngContent stuff
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
  }

  // calls doCheck as a second time
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!')
  }

  // occurs after content checked
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!')
  }
 
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!')
  }
}
