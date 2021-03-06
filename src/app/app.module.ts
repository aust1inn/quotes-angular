import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './component/quote-form/quote-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { QuotesComponent } from './component/quotes/quotes.component';
import { QuoteDetailsComponent } from './component/quote-details/quote-details.component';
import { DaysPastPipe } from './pipes/days-past.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    HighlightDirective,
    QuotesComponent,
    QuoteDetailsComponent,
    DaysPastPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
