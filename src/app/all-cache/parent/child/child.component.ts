import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() childInput: string;

  @Output() childOutput: EventEmitter<String> = new EventEmitter<String>();

  childData: string = 'Child To Parent';

  constructor() {
    console.log('ChildComponent-constructor');
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ChildComponent ngOnChanges ' + changes);

    setTimeout(() => {
      this.childInput = 'Ha Ha HA';
      console.log('ChildComponent After View intialized: ' + this.childInput);
    }, 5000);
  }

  ngAfterViewInit(): void {
    console.log('ChildComponent After View intialized: ' + this.childData);
    setTimeout(() => {
      console.log('ChildComponent After View intialized: ' + this.childData);
    }, 5000);
  }

  save() {
    console.log('save');
  }

  passData() {
    console.log('ChildComponent : Pass Data to Parent ' + this.childData);
    this.childOutput.emit(this.childData);
  }
}
