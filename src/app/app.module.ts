import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './all-cache/parent/parent.component';
import { ChildComponent } from './all-cache/parent/child/child.component';
import { SqrtPipe } from './all-cache/parent/pipe/sqrt-pipe.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    SqrtPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
