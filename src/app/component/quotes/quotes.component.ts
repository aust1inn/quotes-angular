import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/model/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes(1,"Austin" , "Peter Drury" , "Whatever he touches turns into goal",new Date(2020,3,14))
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
