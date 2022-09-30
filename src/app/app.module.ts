import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './view-child/parent/parent.component';
import { ChildComponent } from './view-child/parent/child/child.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ParentComponent, ChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
