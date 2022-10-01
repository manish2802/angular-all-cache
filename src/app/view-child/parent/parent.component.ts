import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, AfterViewInit, OnChanges {
  name = 'Test';

  bool = true;

  @ViewChild(ChildComponent, { static: false }) child: ChildComponent;

  constructor() {
    console.log('ParentComponent-constructor');
  }

  abc() {
    if (this.bool) {
      this.bool = false;
    } else {
      this.bool = true;
    }
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.child.name = this.name;
  }

  ngAfterViewInit() {
    console.log('ParentComponent View has been intialized ' + this.name);
  }
}
