import { Component, OnInit, Optional } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'bp-no-lazy-loading',
  templateUrl: './no-lazy-loading.component.html',
  styleUrls: ['./no-lazy-loading.component.scss']
})
export class NoLazyLoadingComponent implements OnInit {

  constructor(@Optional() public dataService: DataService) { }

  ngOnInit() {
  }

}
