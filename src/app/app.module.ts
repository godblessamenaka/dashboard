import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, RadioControlValueAccessor }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { ClientDetailComponent } from './client-detail.component';
import { RecommendationsComponent } from './recommendations.component';
import { OrdersComponent } from './orders.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientDetailComponent,
    RecommendationsComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
