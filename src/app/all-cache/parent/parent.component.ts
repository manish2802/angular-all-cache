import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ChildComponent } from './child/child.component';
import { AddService } from './service/add.service';
import { Employee } from './service/employee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements OnInit, AfterViewInit, OnChanges, OnDestroy
{
  //Interplation and two way binding  {} and [(ngModel)]
  name = 'Test';

  //property binding
  bool = true;

  chilOutPutData: string = 'ChilOutPutData';

  pipeInput: number = 121;

  @ViewChild(ChildComponent, { static: false }) child: ChildComponent;

  //Reactive FormGroup and FormControl

  jobForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  preview: string = '';

  emailSubscription: Subscription;
  formattedMessage: any;

  num1: number;
  num2: number;
  sum: number;

  constructor(
    private fb: FormBuilder,
    public addserv: AddService,
    private employeeService: EmployeeService
  ) {
    console.log('ParentComponent-constructor');
  }

  //Reactive FormBuilder
  jobFormBuilder = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: [''],
    contacts: this.fb.group({
      contactType: ['-1'],
      email: [''],
      phone: [''],
    }),
    skills: this.fb.array([]),
  });
  previewFormBuilder: string = '';

  employees$: any[];

  //Event Binding
  abc() {
    if (this.bool) {
      this.bool = false;
    } else {
      this.bool = true;
    }
    this.child.save();
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employees$ = res;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ParentComponent: ' + changes);
  }

  ngAfterViewInit() {
    console.log('ParentComponent View has been intialized ' + this.name);
    this.emailSubscription = this.jobForm.valueChanges.subscribe((val) => {
      this.formattedMessage = val;
      console.log(this.formattedMessage);
    });
  }

  //Transfer data child to Parent
  parentMethod(data) {
    this.chilOutPutData = data;
    console.log('ParentComponent: Get data from child ' + data);
  }

  //
  reactiveFormSave() {
    this.preview = JSON.stringify(this.jobForm.value);
    console.log(this.preview);
  }

  //
  reactiveBuilderSave() {
    this.previewFormBuilder = JSON.stringify(this.jobFormBuilder.value);
    console.log(this.previewFormBuilder);
  }

  get skillsForms() {
    return this.jobFormBuilder.get('skills') as FormArray;
  }

  addASkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        programLanguage: [''],
        experience: [0],
      })
    );
  }

  removeSkillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }

  add() {
    this.sum = this.addserv.addBoi(this.num1, this.num2);
  }

  ngOnDestroy(): void {
    this.emailSubscription.unsubscribe();
  }
}
