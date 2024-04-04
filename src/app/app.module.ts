import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UppercaseFirstPipe } from './uppercase-first.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseFirstPipe
  ],
  imports: [
    BrowserModule
  ],
  exports:[UppercaseFirstPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
