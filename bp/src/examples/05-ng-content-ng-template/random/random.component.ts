import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bp-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  public randomNumber: number;

  constructor() {
    this.randomNumber = this.getRandomInt(0, 400);
  }

  ngOnInit() {
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
