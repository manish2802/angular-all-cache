import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, AfterViewInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {}

  ngOnChange() {
    console.log(this.name);
  }

  ngAfterViewInit(): void {
    console.log(this.name);
    setTimeout(() => {
      this.name = 'Ha Ha HA';
      console.log(this.name);
    }, 5000);
  }
}
