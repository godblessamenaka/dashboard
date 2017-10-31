import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, RadioControlValueAccessor }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ClientDetailComponent } from './client-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
