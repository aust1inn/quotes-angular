import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './component/quote-form/quote-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { QuotesComponent } from './component/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    HighlightDirective,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
