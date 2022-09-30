import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, AfterViewInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {
    this.name = 'abc';
  }

  ngAfterViewInit(): void {
    console.log(this.name);
  }
}
