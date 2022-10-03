import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Hero } from './hero';

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

  pipeInput: number = 121;

  @ViewChild(ChildComponent, { static: false }) child: ChildComponent;

  //Reactive Form
  jobForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  preview: string = '';

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

  reactiveFormSave() {
    this.preview = JSON.stringify(this.jobForm.value);
    console.log(this.preview);
  }
}
