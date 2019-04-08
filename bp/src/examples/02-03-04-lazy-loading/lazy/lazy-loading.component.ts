import { Component, OnInit, Optional } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'bp-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent implements OnInit {

  constructor(@Optional() public dataService: DataService) { }

  ngOnInit() {
  }

}
