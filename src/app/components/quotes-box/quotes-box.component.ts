import { Component, OnInit } from '@angular/core';
import { IQuote } from 'src/app/models/IQuote';

@Component({
  selector: 'yps-quotes-box',
  templateUrl: './quotes-box.component.html',
  styleUrls: ['./quotes-box.component.scss']
})
export class QuotesBoxComponent implements OnInit {
  index: number = 0;
  quotes: IQuote[] = [
    {
      quote: "\"A man's mind, stretched by new ideas, may never return to its original dimensions.\"",
      author: "Oliver Wendell Holmes Jr."
    },
    {
      quote: "\"Anyone who has never made a mistake has never tried anything new.\"",
      author: "Albert Einstein"
    },
    {
      quote: "\"He who opens a school door, closes a prison.\"",
      author: "Victor Hugo"
    },
    {
      quote: "\"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.\"",
      author: "Mark Twain"
    },
    {
      quote: "\"Start where you are. Use what you have. Do what you can.\"",
      author: "Arthur Ashe"
    },
    {
      quote: "\"Either you run the day or the day runs you.\"",
      author: "Jim Rohn"
    },
    {
      quote: "\"Education is the passport to the future, for tomorrow belongs to those who prepare for it today.\"",
      author: "Malcolm X"
    },
    {
      quote: "\"Your attitude, not your aptitude, will determine your altitude.\"",
      author: "Zig Ziglar"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.index = Math.floor(Math.random() * this.quotes.length); 
  }

}
