import { Component } from '@angular/core';

let words: Array<string> = [];

@Component({
  selector: 'app-badwords',
  templateUrl: './badwords.component.html',
  styleUrls: ['./badwords.component.scss']
})
export class BadwordsComponent {
  public some!: string;
  public word: string = '';
  public text: string = '';
  public placeholder: string = 'word here...';
  public placeholderAr: string = 'text here...';

  constructor() { }

  addClick() {
    if (this.word == '') { this.placeholder = 'Please write a word!' }
    else {
      this.some = '';//some.innerHTML = '';
      if (words.indexOf(this.word) == -1) words.push(this.word);
      words.forEach((value, ind) => {
        ind > 0 ? this.some += ',' + value : this.some = value
      }
      )
      this.placeholder = 'word here...'
      this.word = ''
    }
  }

  resetClick() {
    words.length = 0;
    this.some = '';
    this.text = '';
  }

  censorClick() {
    let val: string;
    let val1: string;
    if (this.text == '') { this.placeholderAr = 'Please write a text!' }
    else {
      val = this.text;
      words.forEach((value, ind) => {
        if (val.indexOf(value) >= 0) {
          val1 = val.slice(0, val.indexOf(value));
          val = val1.padEnd(value.length + val1.length, "*") + val.substring(val.indexOf(value) + value.length);
        }
      }
      )
      this.text = val;
      this.placeholderAr = 'text here...'
    }
  }
}
