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
  //Interplation and two way binding  {} and [(ngModel)]
  name = 'Test';

  //property binding
  bool = true;

  chilOutPutData: string = 'ChilOutPutData';

  @ViewChild(ChildComponent, { static: false }) child: ChildComponent;

  constructor() {
    console.log('ParentComponent-constructor');
  }

  //Event Binding
  abc() {
    if (this.bool) {
      this.bool = false;
    } else {
      this.bool = true;
    }
    this.child.save();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ParentComponent: ' + changes);
  }

  ngAfterViewInit() {
    console.log('ParentComponent View has been intialized ' + this.name);
  }

  //Transfer data child to Parent
  parentMethod(data) {
    this.chilOutPutData = data;
  }
}
