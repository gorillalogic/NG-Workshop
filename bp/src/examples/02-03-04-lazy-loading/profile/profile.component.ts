import { Component, OnInit, Optional } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'bp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(@Optional() public dataService: DataService) { }

  ngOnInit() {
  }

  public save(user: string) {
    this.dataService.saveUsername(user);
  }

}
