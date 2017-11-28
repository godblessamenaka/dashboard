import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, RadioControlValueAccessor }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { ClientDetailComponent } from './client-detail.component';
import { RecommendationsComponent } from './recommendations.component';
import { OrdersComponent } from './orders.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ClientDetailComponent,
    RecommendationsComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, MatTabsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
