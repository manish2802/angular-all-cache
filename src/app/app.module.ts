import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './all-cache/parent/parent.component';
import { ChildComponent } from './all-cache/parent/child/child.component';
import { SqrtPipe } from './all-cache/parent/pipe/sqrt-pipe.pipe';
import { AddService } from './all-cache/parent/service/add.service';
import { EmployeeService } from './all-cache/parent/service/employee.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    SqrtPipe,
  ],
  providers: [AddService, EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
