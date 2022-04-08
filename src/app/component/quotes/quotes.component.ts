import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/model/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes(1,"Austin" , "Peter Drury" , "Whatever he touches turns into goal",new Date(2021,3,14))
  ];

  addNewQuote(quote:any) {
    // let quoteLength = this.quotes.length;
    // quote.id = quoteLength+1;
    // quote.completeDate = new Date(quote.completeDate)
    // this.quotes.push(quote)

    if (quote.name=="" || quote.quoteWords=="") {
      alert("please input required fields")
    }
    else {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
