import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bp-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class EncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
