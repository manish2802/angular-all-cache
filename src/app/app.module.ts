import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './all-cache/parent/parent.component';
import { ChildComponent } from './all-cache/parent/child/child.component';
import { SqrtPipePipe } from './all-cache/parent/pipe/sqrt-pipe.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ParentComponent, ChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
